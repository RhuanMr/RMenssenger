import React from 'react';
import {Alert, Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const PageComponent = ({children, white}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
      {white && <View style={styles.containerWhite} />}
    </View>
  );
};

export default PageComponent;
