import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import ActionArea from './Components/ActionArea';
import ProfileImage from './Components/ProfileImage';
import PageComponent from '../../../components/Global/Pages';

const InfoUser = ({route}) => {
  const {nameWith} = route.params;

  return (
    <PageComponent style={styles.container} white>
      <ProfileImage nameWith={nameWith} />
      <ActionArea />
    </PageComponent>
  );
};

export default InfoUser;
