import {useEffect, useState} from 'react';
import database from '../../../../services/firebaseConnection';
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {useAuthStore} from '../../../../store/UserStore';

const AppHooks = () => {
  const {user} = useAuthStore();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const dataRender = async () => {
      const values = query(
        collection(database, `users/${user.uid}/chats`),
        orderBy('createdAt', 'desc'),
      );
      onSnapshot(values, snapshot => {
        setChats(
          snapshot.docs.map(doc => ({
            id: doc.id,
            createdAt: doc.data().createdAt.toDate(),
            for: doc.data().for,
            lastText: doc.data().lastText,
            nameWith: doc.data().nameWith,
            with: doc.data().with,
          })),
        );
      });
    };
    dataRender();
  }, [user]);

  return {
    chats,
  };
};

export default AppHooks;
