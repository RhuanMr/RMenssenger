import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const image = require('../../../../../assets/Mocks/Profile_Image.jpg');
const fakeText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis efficitur leo, suscipit pulvinar ante volutpat at. Etiam eu neque molestie, accumsan est sed, egestas est. Nulla molestie euismod pretium. Aliquam erat volutpat. Ut gravida lorem a faucibus suscipit. Suspendisse in mattis justo. Pellentesque sed ligula non urna tempor pellentesque eu eu nisi. Duis pretium vel quam nec egestas. Maecenas tincidunt nunc eu finibus interdum. Donec eget mattis libero. Donec feugiat est nulla, vel dictum eros dictum sed.';
var result;
result = fakeText.slice(0, 45) + '...';
const CardItem = () => (
  <Pressable style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.profileImage} source={image} />
      <View style={styles.textContent}>
        <View style={styles.infoContent}>
          <Text style={styles.titleText}>Perfil 4</Text>
          <Text style={styles.statusText}>Online</Text>
        </View>
        <Text>{result}</Text>
      </View>
    </View>
  </Pressable>
);

export default CardItem;
