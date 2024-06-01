/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppStack} from './src/navigation';
import {MainWrapper} from './src/layouts';

function App(): React.JSX.Element {
  return (
    <MainWrapper>
      <AppStack />
    </MainWrapper>
  );
}

export default App;
