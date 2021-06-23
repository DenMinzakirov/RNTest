import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Main from './screens/Main';
import List from './screens/List';
import { store } from './redux/store';
import IconHome from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default App = () => {
  console.log('store', store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Main'}
          tabBarOptions={{
            showIcon: true,
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            tabStyle: {
              height: '100%',
              fontSize: 25,
              paddingVertical: 6,
            },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case 'Main':
                  return <IconHome name='home' size={30} color={color} />;
                case 'List':
                  return <IconHome name='list' size={25} color={color} />;
                default:
                  return null;
              }
            },
            animationEnabled: false,
          })}
        >
          <Tab.Screen name='Main' component={Main} />
          <Tab.Screen name='List' component={List} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
