import React from 'react';
import styles from './styles';
import {GiftedChat} from 'react-native-gifted-chat';
import ChatHooks from '../../Hooks';
import {useAuthStore} from '../../../../../store/UserStore';

const List = ({id, idWith, nameWith}) => {
  const {messages, messageSend} = ChatHooks(id, idWith, nameWith);
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
