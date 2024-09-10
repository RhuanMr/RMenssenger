import {create} from 'zustand';
import database from '../../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();

export const useAuthStore = create(set => ({
  user: {},
  isLoggedIn: false,

  login: (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        const userDB = userCredential.user;
        const docRef = doc(database, 'users', userDB.uid);
        const docSnap = await getDoc(docRef);

        if ((await docSnap).exists) {
          const data = {
            uid: userDB.uid,
            name: docSnap.data().name,
            email: docSnap.data().email,
          };
          set({user: data});
          const storageUser = () => {
            AsyncStorage.setItem('Auth_user', JSON.stringify(data));
          };
          if (storageUser) {
            set({isLoggedIn: true});
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  },

  register: (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        let uid = userCredential.user.uid;
        await setDoc(doc(database, 'users', uid), {
          name,
          email,
        });
        const data = {
          uid: uid,
          nome: name,
          email: email,
        };
        set({user: data});
        const storageUser = () => {
          AsyncStorage.setItem('Auth_user', JSON.stringify(data));
        };
        if (storageUser) {
          set({isLoggedIn: true});
        }
      })
      .catch(error => {
        alert(error.code);
      });
  },

  logout: () => {
    const removeStorage = data => {
      AsyncStorage.clear();
    };
    set({isLoggedIn: false});
    removeStorage();
  },
}));
