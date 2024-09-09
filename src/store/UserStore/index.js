import {create} from 'zustand';
import {signIn, signUp} from './hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStore = create(set => ({
  user: {},
  isLoggedIn: false,

  login: (email, password) => {
    const data = signIn(email, password);
    set({user: data});
    const storageUser = () => {
      AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    };
    if (storageUser) {
      set({isLoggedIn: true});
    }
  },

  register: (email, password, name) => {
    const data = signUp(email, password, name);
    set({user: data});
    const storageUser = () => {
      AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    };
    if (storageUser) {
      set({isLoggedIn: true});
    }
  },

  logout: () => {
    const removeStorage = data => {
      AsyncStorage.clear();
    };
    set({isLoggedIn: false});
    removeStorage();
  },
}));
