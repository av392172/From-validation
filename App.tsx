/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import FormScreen1 from './src/screens/FormScreen1';
import FormScreen3 from './src/screens/FormScreen3';
import FormScreen2 from './src/screens/FormScreen2';
import {store} from './src/redux/store';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Form-1" component={FormScreen1} />
          <Stack.Screen name="Form-2" component={FormScreen2} />
          <Stack.Screen name="Form-3" component={FormScreen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
