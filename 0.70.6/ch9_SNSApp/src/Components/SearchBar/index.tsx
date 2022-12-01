import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styled from 'styled-components/native';

import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';

const Container = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background-color: #FEFFFF;
  width: 100%;
`;

const SearchBar = () => {
  return (
    <SafeAreaView>
      <Container>
        <Input
          style={{flex: 1, marginLeft: 8, height: 32}}
          placeholder="검색"
        />
        <IconButton iconName="camera" />
      </Container>
    </SafeAreaView>
  );
};
export default SearchBar;
