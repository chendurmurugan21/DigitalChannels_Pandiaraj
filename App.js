import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './src/routes/ScreenOne';
import ScreenThree from './src/routes/ScreenThree';
import ScreenTwo from './src/routes/ScreenTwo';

import { Provider } from 'react-redux';

import configureStore from './src/common/store/configureStore';

const store = configureStore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScreenOne">
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
