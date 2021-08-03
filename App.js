import React from 'react';
import {SafeAreaView} from 'react-native';
import {BackButton, NativeRouter, Route, Switch} from 'react-router-native';
import Menu from './src/pages/Menu';
import Game from './src/pages/Game';

const App = () => {

  return (
    <NativeRouter>
      <BackButton>
        <SafeAreaView>
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
