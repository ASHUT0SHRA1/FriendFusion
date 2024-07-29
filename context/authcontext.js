import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: '',
  });

  axios.defaults.headers.common['Authorization'] = `Bearer ${state?.token}`;
  axios.defaults.baseURL = "http://192.168.0.160:8080/api/v1";

  useEffect(() => {
    const loadLocalStorageData = async () => {
      let data = await AsyncStorage.getItem('@auth');
      let loginData = JSON.parse(data);
      setState({ user: loginData?.user, token: loginData?.token });
    };
    loadLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
