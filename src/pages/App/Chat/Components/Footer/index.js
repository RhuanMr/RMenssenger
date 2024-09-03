import React from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const image = require('../../../../../assets/Paper_Plane.png');

const Footer = () => (
  <View style={styles.container}>
    <View style={styles.chatInput}>
      <TextInput multiline={true} style={styles.textInputArea} />
    </View>
    <TouchableOpacity style={styles.sendButton}>
      <Image source={image} />
    </TouchableOpacity>
  </View>
);

export default Footer;
