import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  padding: 0 16px 8px 16px;
  border-bottom-width: 1px;
  border-color: #D3D3D3;
`;
const LabelName = Styled.Text`
  font-weight: bold;
  margin-bottom: 8px;
`;
const LabelDescription = Styled.Text`
  line-height: 20px;
`;

interface Props {
  name: string;
  description?: string;
}

const ProfileBody = ({ name, description }: Props) => {
  return (
    <Container>
      <LabelName>{name}</LabelName>
      <LabelDescription numberOfLines={5}>{description}</LabelDescription>
    </Container>
  );
};

export default ProfileBody;
