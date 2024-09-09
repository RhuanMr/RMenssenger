import database from '../../../services/firebaseConnection';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {addDoc, collection, doc, getDoc, setDoc} from 'firebase/firestore';

const auth = getAuth();
const usersRef = collection(database, 'users');

export function signIn(email, password) {
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
        return data;
      } else {
        console.log('No such document!');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export function signUp(email, password, name) {
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
      return data;
    })
    .catch(error => {
      alert(error.code);
    });
}
