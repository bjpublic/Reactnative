import React from 'react';
import Styled from 'styled-components/native';

import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';

const Container = Styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: #FEFFFF;
`;

const SearchBar = () => {
  return (
    <Container>
      <Input style={{flex: 1, marginLeft: 8, height: 32}} placeholder="검색" />
      <IconButton iconName="camera" />
    </Container>
  );
};
export default SearchBar;
