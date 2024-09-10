import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC48GWWs0i7KYOQt4HLIJiyv9HILK99nvc',
  authDomain: 'rmessages-88b1c.firebaseapp.com',
  projectId: 'rmessages-88b1c',
  storageBucket: 'rmessages-88b1c.appspot.com',
  messagingSenderId: '788665106225',
  appId: '1:788665106225:web:0881e5a01195342103ba10',
  measurementId: 'G-66BERX055W',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const database = getFirestore(app);

export default database;
