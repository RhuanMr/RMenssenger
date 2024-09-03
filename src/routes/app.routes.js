import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/App/Home';
import Chat from '../pages/App/Chat';
import InfoUser from '../pages/App/InfoUser';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <AppStack.Screen
      name="Chat"
      component={Chat}
      options={{headerShown: false}}
    />
    <AppStack.Screen
      name="InfoUser"
      component={InfoUser}
      options={{headerShown: false}}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
