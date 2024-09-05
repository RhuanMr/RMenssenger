import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PageComponent from '../../../components/Global/Pages';
import Form from './Components/Form';
import {useNavigation} from '@react-navigation/native';

const image = require('../../../assets//Chevron_Left.png');

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <PageComponent>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={image} />
        </TouchableOpacity>
      </View>
      <Form />
    </PageComponent>
  );
};

export default SignUp;
