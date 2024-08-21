import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import Routes from './src/routes';

const App = () => (
  <NavigationContainer>
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle="light-content" />
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
