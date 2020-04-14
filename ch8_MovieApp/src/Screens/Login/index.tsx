import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Linking } from 'react-native';
import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const FormContainer = Styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = Styled.Text`
  width: 100%;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Login = ({ navigation }: Props) => {
  return (
    <Container>
      <FormContainer>
        <Input style={{ marginBottom: 16 }} placeholder="이메일" />
        <Input
          style={{ marginBottom: 16 }}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <Button
          style={{ marginBottom: 24 }}
          label="로그인"
          onPress={() => {
            console.log('test');
            AsyncStorage.setItem('key', 'JWT_KEY');
            navigation.navigate('MovieNavigator');
          }}
        />
        <PasswordReset
          onPress={() => {
            Linking.openURL('https://dev-yakuza.github.io/ko/');
          }}>
          비밀번호 재설정
        </PasswordReset>
      </FormContainer>
    </Container>
  );
};

Login.navigationOptions = {
  title: 'MOVIEAPP',
  headerTransparent: true,
  headerTintColor: '#E70915',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Login;
