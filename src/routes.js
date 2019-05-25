import React from 'react';

import Main from '~/pages/Main';
import Single from '~/pages/Single';
import Platform from '~/pages/Platform';
import Search from '~/pages/Search';
import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home: Main,
      SingleGame: Single,
      PlatformPage: Platform,
      Search: Search,
    },
    {
      initialRouteName: 'Home',
    }
  )
);

export default Routes;