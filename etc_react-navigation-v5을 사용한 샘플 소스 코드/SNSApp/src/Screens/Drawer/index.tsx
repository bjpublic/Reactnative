import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import {UserContext} from '~/Context/User';

const Header = Styled.View`
  border-bottom-width: 1px;
  border-color: #D3D3D3;
  padding: 8px 16px;
`;
const Title = Styled.Text``;
const Button = Styled.TouchableHighlight`
  padding: 8px 16px;
`;
const ButtonContainer = Styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = Styled.Image`
  margin-right: 8px;
`;
const Label = Styled.Text`
  font-size: 16px;
`;
const Footer = Styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #D3D3D3;
`;

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({props}: Props) => {
  const {logout} = useContext<IUserContext>(UserContext);

  return (
    <DrawerContentScrollView {...props}>
      <Header>
        <Title>Sara Lambert</Title>
      </Header>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/Assets/Images/ic_camera.png')} />
          <Label>사진</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/Assets/Images/ic_live.png')} />
          <Label>라이브</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon
            source={require('~/Assets/Images/Tabs/ic_favorite_outline.png')}
          />
          <Label>팔로워</Label>
        </ButtonContainer>
      </Button>
      <Footer>
        <Button
          onPress={() => {
            logout();
          }}>
          <ButtonContainer>
            <Icon
              source={require('~/Assets/Images/Tabs/ic_profile_outline.png')}
            />
            <Title>로그아웃</Title>
          </ButtonContainer>
        </Button>
      </Footer>
    </DrawerContentScrollView>
  );
};

export default Drawer;
