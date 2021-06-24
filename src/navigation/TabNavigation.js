import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Main from '../screens/Main';
import List from '../screens/List';
import IconHome from 'react-native-vector-icons/MaterialIcons';
import { ROUTE_NAME, COLORS } from '../config/constant';
import styles from '../styles';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { isVisibleModal } = useSelector((state) => state.moviesReducer);
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_NAME.MAIN}
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
        },
        showIcon: true,
        activeTintColor: isVisibleModal ? COLORS.GRAY : COLORS.BLUE,
        inactiveTintColor: COLORS.GRAY,
        tabStyle: styles.tabStyle,
        activeBackgroundColor: isVisibleModal ? COLORS.DARKENING : COLORS.WHITE,
        inactiveBackgroundColor: isVisibleModal
          ? COLORS.DARKENING
          : COLORS.WHITE,
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
  );
};

export default TabNavigation;
