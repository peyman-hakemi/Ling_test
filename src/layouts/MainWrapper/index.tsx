import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store/store';
import {Appearance, SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from '../../theme/theme';
import {colorPalettes} from '../../theme';
import {NavigationContainer} from '@react-navigation/native';
interface IProps {
  children: React.ReactNode;
}

function MainWrapper({children}: IProps) {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={
                isDarkMode ? colorPalettes.black : colorPalettes.white
              }
            />
            {children}
          </ThemeProvider>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

export default MainWrapper;
