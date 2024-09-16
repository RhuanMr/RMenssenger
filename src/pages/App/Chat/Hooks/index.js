import {useCallback, useEffect, useState} from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
} from 'firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
import database from '../../../../services/firebaseConnection';
import {useNavigation} from '@react-navigation/native';

const ChatHooks = (chatId, otherUser, nameOther) => {
  const [messages, setMessages] = useState([]);
  const chatRef = `chats/${chatId}/messages`;
  const navigation = useNavigation();

  useEffect(() => {
    async function getMessages() {
      const values = query(
        collection(database, chatRef),
        orderBy('createdAt', 'desc'),
      );
      onSnapshot(values, snapshot =>
        setMessages(
          snapshot.docs.map(docType => ({
            _id: docType.id,
            text: docType.data().text,
            createdAt: docType.data().createdAt.toDate(),
            user: {
              _id: docType.data().from,
            },
          })),
        ),
      );
    }
    getMessages();
  }, [chatRef]);

  const messageSend = useCallback(
    (messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );

      const {createdAt, text, user} = messages[0];

      addDoc(collection(database, chatRef), {
        createdAt,
        text,
        from: user._id,
      });
    },
    [chatRef],
  );

  const handleGoToHome = () => {
    const {createdAt, text, user} = messages[0];

    setDoc(doc(database, `users/${user._id}/chats/${chatId}`), {
      createdAt,
      lastText: text,
      from: user._id,
      with: otherUser,
      nameWith: nameOther,
    });

    navigation.goBack();
  };

  return {messages, messageSend, handleGoToHome};
};

export default ChatHooks;
