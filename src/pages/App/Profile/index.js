import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import PageComponent from '../../../components/Global/Pages';
import Header from './Components/Header';
import ProfileHooks from './Hooks';
import {useAuthStore} from '../../../store/UserStore';

const profile = require('../../../assets/Mocks/Profile_Image.jpg');

const Profile = () => {
  const {handleLogOut} = ProfileHooks();
  const {user} = useAuthStore();

  return (
    <PageComponent style={styles.container}>
      <Header />
      <View style={styles.contentInfo}>
        <Text style={styles.nameTitle}>{user.name}</Text>
        <Image source={profile} style={styles.profileImage} />
      </View>
      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => handleLogOut()}>
        <Text style={styles.titleButton}>Sair</Text>
      </TouchableOpacity>
    </PageComponent>
  );
};

export default Profile;
