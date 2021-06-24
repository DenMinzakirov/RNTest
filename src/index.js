import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import Main from './screens/Main';
import List from './screens/List';
import { store } from './redux/store';
import IconHome from 'react-native-vector-icons/MaterialIcons';
import { ROUTE_NAME, COLORS } from './config/constant';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={ROUTE_NAME.MAIN}
          tabBarOptions={{
            showIcon: true,
            activeTintColor: COLORS.BLUE,
            inactiveTintColor: COLORS.GRAY,
            tabStyle: styles.tabStyle,
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              switch (route.name) {
                case ROUTE_NAME.MAIN:
                  return <IconHome name='home' size={30} color={color} />;
                case ROUTE_NAME.LIST:
                  return <IconHome name='list' size={25} color={color} />;
                default:
                  return null;
              }
            },
            animationEnabled: false,
          })}
        >
          <Tab.Screen name={ROUTE_NAME.MAIN} component={Main} />
          <Tab.Screen name={ROUTE_NAME.LIST} component={List} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
