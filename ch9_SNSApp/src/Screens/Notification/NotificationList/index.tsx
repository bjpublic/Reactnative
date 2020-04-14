import React from 'react';
import {FlatList} from 'react-native';

import Styled from 'styled-components/native';

const NotificationContainer = Styled.View`
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
`;
const ProfileImage = Styled.Image`
  border-radius: 40px;
`;
const LabelName = Styled.Text`
  font-weight: bold;
`;
const Message = Styled.Text`
  flex: 1;
  padding:0 16px;
`;
const PostImage = Styled.Image``;

interface Props {
  id: number;
  width: number;
  data: Array<IFeed>;
  onEndReached: () => void;
}

const NotificationList = ({id, width, data, onEndReached}: Props) => {
  return (
    <FlatList
      data={data}
      style={{width}}
      keyExtractor={(item, index) => {
        return `notification-${id}-${index}`;
      }}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      renderItem={({item, index}) => (
        <NotificationContainer>
          <ProfileImage
            source={{uri: item.photo}}
            style={{width: 50, height: 50}}
          />
          <Message numberOfLines={2}>
            <LabelName>{item.name}</LabelName>님이 회원님 게시물을 좋아합니다.
          </Message>
          <PostImage
            source={{uri: item.images[0]}}
            style={{width: 50, height: 50}}
          />
        </NotificationContainer>
      )}
    />
  );
};

export default NotificationList;
