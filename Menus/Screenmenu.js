import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/authcontext';
import Home from '../Screen/Home';
import Register from '../Screen/auth/Register';
import Login from '../Screen/auth/Login';
import Headermenu from './Headermenu';
import Post from '../Screen/Post';
import About from '../Screen/About';
import Account from '../Screen/Account';

const Stack = createNativeStackNavigator();

const Screenmenu = () => {
  const [state] = useContext(AuthContext);
  const authUser = state?.user && state?.token;

  return (
    <Stack.Navigator initialRouteName={authUser ? 'Home' : 'Login'}>
      {authUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => <Headermenu />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}

          />
          <Stack.Screen
            name="About"
            component={About}

          />
          <Stack.Screen
            name="Account"
            component={Account}

          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}

    </Stack.Navigator>
  );
};

export default Screenmenu;

const styles = StyleSheet.create({});
