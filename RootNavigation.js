import React from 'react';
import { AuthProvider } from './context/authcontext';
import Screenmenu from './Menus/Screenmenu';

const RootNavigation = () => {
  return (
    <AuthProvider>
      <Screenmenu />
    </AuthProvider>
  );
};

export default RootNavigation;

