import React from 'react';
import styles from './styles';
import {GiftedChat} from 'react-native-gifted-chat';
import ChatHooks from '../../Hooks';

const List = () => {
  const {messages, messageSend, user} = ChatHooks();
  return (
    <GiftedChat
      style={styles.container}
      messages={messages}
      onSend={msg => messageSend(msg)}
      user={{
        _id: user.name,
      }}
    />
  );
};

export default List;
