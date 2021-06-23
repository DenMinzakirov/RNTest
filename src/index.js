import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import List from './screens/List';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Main' component={Main} />
        <Tab.Screen name='List' component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
