import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const image = require('../../../../../assets/Mocks/Profile_Image.jpg');

const CardItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Chat', {chatId: item.id, otherUser: item.with})
      }>
      <View style={styles.content}>
        <Image style={styles.profileImage} source={image} />
        <View style={styles.textContent}>
          <View style={styles.infoContent}>
            <Text style={styles.titleText}>{item.nameWith}</Text>
            <Text style={styles.statusText}>Online</Text>
          </View>
          <Text style={styles.messageText}>
            {item.lastText.slice(0, 45) + '...'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardItem;
