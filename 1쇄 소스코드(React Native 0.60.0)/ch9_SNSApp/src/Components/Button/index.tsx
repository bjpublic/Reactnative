import React from 'react';
import Styled from 'styled-components/native';

const StyleButton = Styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #3796EF;
`;
const Label = Styled.Text`
  color: #FFFFFF;
`;

interface Props {
  label: string;
  style?: Object;
  color?: string;
  onPress?: () => void;
}

const Button = ({ label, style, color, onPress }: Props) => {
  return (
    <StyleButton style={style} onPress={onPress}>
      <Label style={{ color: color ? color : '#FFFFFF' }}>{label}</Label>
    </StyleButton>
  );
};

export default Button;
