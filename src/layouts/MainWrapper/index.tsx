import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store/store';
import {SafeAreaView} from 'react-native';
interface IProps {
  children: React.ReactNode;
}

function MainWrapper({children}: IProps) {
  return (
    <Provider store={store}>
      <SafeAreaView>
        {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
        {children}
      </SafeAreaView>
    </Provider>
  );
}

export default MainWrapper;
