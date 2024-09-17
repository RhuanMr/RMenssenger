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
import {useAuthStore} from '../../../../store/UserStore';

const ChatHooks = (chatId, nameOther) => {
  const [messages, setMessages] = useState([]);
  const {user} = useAuthStore();
  const chatRef = `users/${user.uid}/chats/${chatId}`; // colocar todas as requisisões em uma service depois
  const navigation = useNavigation();

  useEffect(() => {
    async function getMessages() {
      const values = query(
        collection(database, chatRef + '/messages'),
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
              name: user.name,
            },
          })),
        ),
      );
    }
    getMessages();
  }, [chatRef, user.name]);

  const messageSend = useCallback(
    (messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );

      const {createdAt, text, user} = messages[0];

      addDoc(collection(database, chatRef + '/messages'), {
        createdAt,
        text,
        from: user._id,
      });
      setDoc(doc(database, chatRef), {
        createdAt,
        text,
        from: user._id,
        nameWith: nameOther,
      });
    },
    [chatRef, nameOther],
  );

  const handleGoToHome = () => {
    navigation.goBack();
  };

  return {messages, messageSend, handleGoToHome};
};

export default ChatHooks;
