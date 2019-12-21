import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from '~/components/Header';

import SignIn from './pages/SignIn';
import Repositories from './pages/App/Repositories';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    App: createStackNavigator(
      {
        Repositories,
      },
      {
        defaultNavigationOptions: {
          headerTitle: <Header />,
        },
      }
    ),
  })
);
