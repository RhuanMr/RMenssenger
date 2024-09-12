import React from 'react';
import styles from './styles';
import {GiftedChat} from 'react-native-gifted-chat';
import ChatHooks from '../../Hooks';

const List = ({chatId}) => {
  const {messages, messageSend, user} = ChatHooks(chatId);

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
