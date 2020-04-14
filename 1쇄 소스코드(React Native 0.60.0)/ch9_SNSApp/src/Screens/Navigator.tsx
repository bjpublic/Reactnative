import React from 'react';
import { Image } from 'react-native';

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import Drawer from '~/Screens/Drawer';

const LoginNavigator = createStackNavigator({
  Login,
  Signup,
  PasswordReset,
});

const MyFeedTab = createStackNavigator({
  MyFeed,
});

const FeedsTab = createStackNavigator({
  Feeds,
  FeedListOnly,
});

const UploadTab = createStackNavigator({
  Upload,
});

const ProfileTab = createStackNavigator({
  Profile,
});

const MainTabs = createBottomTabNavigator({
  MyFeed: {
    screen: MyFeedTab,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_home.png')
              : require('~/Assets/Images/Tabs/ic_home_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Feeds: {
    screen: FeedsTab,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_search.png')
              : require('~/Assets/Images/Tabs/ic_search_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Upload: {
    screen: UploadTab,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_add.png')
              : require('~/Assets/Images/Tabs/ic_add_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_favorite.png')
              : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_profile.png')
              : require('~/Assets/Images/Tabs/ic_profile_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
});

const MainNavigator = createDrawerNavigator(
  {
    MainTabs,
  },
  {
    drawerPosition: 'right',
    drawerType: 'slide',
    contentComponent: Drawer,
  }
);

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
    MainNavigator,
  },
  {
    initialRouteName: 'CheckLogin',
  }
);

export default createAppContainer(AppNavigator);
