import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './src/Screens/Navigator';

import {UserContextProvider} from './src/Context/User';

const App = () => {
  return (
    <UserContextProvider>
      <StatusBar barStyle="light-content"/>
      <Navigator/>
    </UserContextProvider>
  );
}

export default App;