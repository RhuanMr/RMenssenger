import React from 'react';
import styles from './styles';
import {GiftedChat} from 'react-native-gifted-chat';
import ChatHooks from '../../Hooks';
import {useAuthStore} from '../../../../../store/UserStore';

const List = ({chatId, otherUser}) => {
  const {messages, messageSend} = ChatHooks(chatId, otherUser);
  const {user} = useAuthStore();

  return (
    <GiftedChat
      style={styles.container}
      messages={messages}
      onSend={msg => messageSend(msg)}
      user={{
        _id: user.uid,
      }}
    />
  );
};

export default List;
