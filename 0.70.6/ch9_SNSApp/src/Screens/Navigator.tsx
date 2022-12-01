import React, {useContext} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {UserContext} from '~/Context/User';
import SearchBar from '~/Components/SearchBar';
import Loading from '~/Components/Loading';

import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import CustomDrawer from '~/Screens/Drawer';

const LoginStack = createStackNavigator();
const LoginNavigator = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Signup" component={Signup} />
      <LoginStack.Screen name="PasswordReset" component={PasswordReset} />
    </LoginStack.Navigator>
  );
};

const MyFeedTabStack = createStackNavigator();
const MyFeedTab = () => {
  return (
    <MyFeedTabStack.Navigator>
      <MyFeedTabStack.Screen
        name="MyFeedTabMyFeed"
        component={MyFeed}
        options={{title: 'SNS App'}}
      />
    </MyFeedTabStack.Navigator>
  );
};

const FeedsStack = createStackNavigator();
const FeedsTab = () => {
  return (
    <FeedsStack.Navigator>
      <FeedsStack.Screen
        name="FeedsTabFeeds"
        component={Feeds}
        options={{
          header: () => <SearchBar />,
        }}
      />
      <FeedsStack.Screen
        name="FeedListOnly"
        component={FeedListOnly}
        options={{
          headerBackTitleVisible: false,
          title: '둘러보기',
          headerTintColor: '#292929',
        }}
      />
    </FeedsStack.Navigator>
  );
};

const UploadTabStack = createStackNavigator();
const UploadTab = () => {
  return (
    <UploadTabStack.Navigator>
      <UploadTabStack.Screen
        name="UploadTabUpload"
        component={Upload}
        options={{title: '사진 업로드'}}
      />
    </UploadTabStack.Navigator>
  );
};

const ProfileTabStack = createStackNavigator();
const ProfileTab = () => {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="ProfileTabProfile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </ProfileTabStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <BottomTab.Screen
        name="MyFeed"
        component={MyFeedTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_home.png')
                  : require('~/Assets/Images/Tabs/ic_home_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Feeds"
        component={FeedsTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_search.png')
                  : require('~/Assets/Images/Tabs/ic_search_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={UploadTab}
        options={{
          tabBarLabel: 'Third',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_add.png')
                  : require('~/Assets/Images/Tabs/ic_add_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_favorite.png')
                  : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('~/Assets/Images/Tabs/ic_profile.png')
                  : require('~/Assets/Images/Tabs/ic_profile_outline.png')
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'slide',
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer props={props} />}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {userInfo ? <MainNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
