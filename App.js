import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {BackButton, NativeRouter, Route, Switch} from 'react-router-native';
import Menu from './src/pages/Menu';
import Game from './src/pages/Game';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeRouter>
      <BackButton>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/game" component={Game} />
          </Switch>
        </SafeAreaView>
      </BackButton>
    </NativeRouter>
  );
};

export default App;
