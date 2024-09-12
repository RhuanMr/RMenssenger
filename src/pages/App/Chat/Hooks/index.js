import {useCallback, useEffect, useState} from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
import database from '../../../../services/firebaseConnection';
import {useAuthStore} from '../../../../store/UserStore';

const ChatHooks = chatId => {
  const [messages, setMessages] = useState([]);
  const {user} = useAuthStore();

  useEffect(() => {
    async function getMessages() {
      const values = query(
        collection(database, `chats/${chatId}/messages`),
        orderBy('createdAt', 'desc'),
      );
      onSnapshot(values, snapshot =>
        setMessages(
          snapshot.docs.map(doc => ({
            // _id: doc.id,
            // createdAt: doc.data().createdAt.toDate(),
            // text: doc.data().text,
            // forId: doc.data().for,
            // to: doc.data().to,
            _id: doc.id,
            text: doc.data().text,
            createdAt: doc.data().createdAt.toDate(),
            user: {
              _id: doc.data().for,
            },
          })),
        ),
      );
    }
    getMessages();
  }, [chatId]);

  const messageSend = useCallback((messages = []) => {
    setMessages(previousMessages => {
      GiftedChat.append(previousMessages, messages);
    });
    const {_id, createdAt, text, user} = messages[0];

    // addDoc(collection(database, 'chats'), {
    //   id: _id,
    //   createdAt,
    //   text,
    //   for: ,
    //   to: ,
    // });
  }, []);
  return {messages, messageSend, user};
};

export default ChatHooks;
