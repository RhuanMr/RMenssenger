import database from '../../../services/firebaseConnection';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {set, ref, getDatabase, child, get} from 'firebase/database';

const auth = getAuth();
const db = database;

export async function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(async userCredential => {
      const userDB = userCredential.user;
      const dbRef = ref(getDatabase());
      get(child(dbRef, `/users/${userDB.uid}`)).then(snapshot => {
        if (snapshot.exists()) {
          const data = {
            uid: userDB.uid,
            name: snapshot.val().name,
            email: snapshot.val().email,
            nick: snapshot.val().nick,
          };
          return data;
        }
      });
    })
    .catch(error => {
      console.error(error);
    });
}

export async function signUp(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async userCredential => {
      let uid = userCredential.user.uid;
      await set(ref(db, 'users/' + uid), {
        uid: uid,
        nome: name,
        email: email,
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
