import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UserContext} from '~/Context/User';

import Loading from '~/Screens/Loading';

import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

const LoginStack = createNativeStackNavigator<LoginNaviParamList>();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'MOVIEAPP',
          headerTransparent: true,
          headerTintColor: '#E70915',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </LoginStack.Navigator>
  );
};

const MovieStack = createNativeStackNavigator<MovieNaviParamList>();
const MovieNavigator = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name="MovieHome"
        component={MovieHome}
        options={{
          title: 'MOVIEAPP',
          headerTintColor: '#E70915',
          headerStyle: {
            backgroundColor: '#141414',
            // borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <MovieStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'MOVIEAPP',
          headerTintColor: '#E70915',
          headerStyle: {
            backgroundColor: '#141414',
            // borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </MovieStack.Navigator>
  );
};

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {userInfo ? <MovieNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
