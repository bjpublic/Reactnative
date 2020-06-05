import React from 'react';
import { StatusBar } from 'react-native';

import Navigator from '~/Screens/Navigator';
import { RandomUserDataProvider } from '~/Context/RandomUserData';

interface Props {}

const App = ({  }: Props) => {
  return (
    <RandomUserDataProvider cache={true}>
      <StatusBar barStyle="default" />
      <Navigator />
    </RandomUserDataProvider>
  );
};
export default App;
