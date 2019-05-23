import React from 'react';

import Main from '~/pages/Main';
import SearchPage from '~/pages/Search';
import { Icon } from 'native-base';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: { 
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => {
            return <Icon type="FontAwesome" name="home" />;
        },
      },
    },
    Search: { 
      screen: SearchPage,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon  type="FontAwesome" name="search" />;
        },
      },
    },
  })
);

export default Routes;