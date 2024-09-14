import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import ActionArea from './Components/ActionArea';
import ProfileImage from './Components/ProfileImage';
import PageComponent from '../../../components/Global/Pages';

const InfoUser = ({route}) => {
  const {item} = route.params;

  return (
    <PageComponent style={styles.container} white>
      <ProfileImage item={item} />
      <ActionArea />
    </PageComponent>
  );
};

export default InfoUser;
