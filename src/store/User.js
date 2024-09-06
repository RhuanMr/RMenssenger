import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-community/async-storage';

export const useAuthStore = create(
  persist(set => ({
    user: {},
    isLoggedIn: false,
    login: () => {
      const storageUser = async data => {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
      };
      if (storageUser) {
        set({isLoggedIn: true});
      }
    },
    logout: () => {
      const removeStorage = async data => {
        await AsyncStorage.clear();
      };
      set({isLoggedIn: false});
      removeStorage();
    },
  })),
);
