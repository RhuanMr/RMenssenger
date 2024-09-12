import {useCallback, useEffect, useState} from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  setDoc,
} from 'firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
import database from '../../../../services/firebaseConnection';

const ChatHooks = (chatId, otherUser) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const values = query(
        collection(database, `chats/${chatId}/messages`),
        orderBy('createdAt', 'desc'),
      );
      onSnapshot(values, snapshot =>
        setMessages(
          snapshot.docs.map(doc => ({
            _id: doc.id,
            text: doc.data().text,
            createdAt: doc.data().createdAt.toDate(),
            user: {
              _id: doc.data().from,
            },
          })),
        ),
      );
    }
    getMessages();
  }, [chatId, messages]);

  const messageSend = useCallback(
    (messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );

      const {createdAt, text, user} = messages[0];

      addDoc(collection(database, `chats/${chatId}/messages`), {
        createdAt,
        text,
        from: user._id,
      });

      //setDoc(collection(database, `users/${user._id}/chats/${chatId}`)) // ajustar lógica dessa parte
    },
    [chatId],
  );
  return {messages, messageSend};
};

export default ChatHooks;
