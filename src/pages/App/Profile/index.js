import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PageComponent from '../../../components/Global/Pages';

const Profile = () => (
  <PageComponent style={styles.container}>
    <View>
      <Text>Profile</Text>
    </View>
  </PageComponent>
);

export default Profile;
