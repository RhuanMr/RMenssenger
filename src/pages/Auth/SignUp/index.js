import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PageComponent from '../../../components/Global/Pages';
import Form from './Components/Form';

const image = require('../../../assets//Chevron_Left.png');

const SignUp = () => (
  <PageComponent>
    <View>
      <TouchableOpacity>
        <Image source={image} />
      </TouchableOpacity>
    </View>
    <Form />
  </PageComponent>
);

export default SignUp;
