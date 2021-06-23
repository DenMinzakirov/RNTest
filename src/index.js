import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Main from './screens/Main';
import List from './screens/List';
import {store} from './redux/store';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default App = () => {
    console.log('store',store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Main' component={Main} />
          <Tab.Screen name='List' component={List} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
