import React from 'react';
import styles from './styles';
import {GiftedChat} from 'react-native-gifted-chat';
import ChatHooks from '../../Hooks';
import {useAuthStore} from '../../../../../store/UserStore';

const List = ({item}) => {
  const {messages, messageSend} = ChatHooks(item.id, item.with, item.nameWith);
  const {user} = useAuthStore();

  //arrumar o envio lento
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
