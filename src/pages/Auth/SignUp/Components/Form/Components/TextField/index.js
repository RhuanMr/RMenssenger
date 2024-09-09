import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import COLORS from '../../../../../../../styles/colors';

const TextField = props => (
  <View style={styles.container}>
    <TextInput
      style={styles.TextField}
      placeholderTextColor={COLORS.SECONDARY}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
  </View>
);

export default TextField;
