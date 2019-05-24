import React from 'react';

import Main from '~/pages/Main';
import Single from '~/pages/Single';
import Platform from '~/pages/Platform';
import Search from '~/pages/Search';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator(
    {
        Home: {
            screen: Main, 
            navigationOptions: {
                header: null,
            },
        },
        Search: {
            screen: Search, 
            navigationOptions: {
                header: null,
            },
        },
        SingleGame: {
            screen: Single,
        },
        PlatformPage:  {
            screen: Platform,
        }
    },
    {
        initialRouteName: 'Home',
    }
  ),

);

export default Routes;