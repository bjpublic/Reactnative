import React from 'react';
import {
  FlatList,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import Styled from 'styled-components/native';

const ImageContainer = Styled.TouchableHighlight`
  background: #FEFFFF;
  padding: 1px;
`;

interface Props {
  id?: number;
  bounces?: boolean;
  scrollEnabled?: boolean;
  feedList: Array<IFeed>;
  loading?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onPress?: () => void;
}

const ImageFeedList = ({
  id,
  bounces = true,
  scrollEnabled = true,
  feedList,
  loading,
  onRefresh,
  onEndReached,
  onScroll,
  onPress,
}: Props) => {
  const width = Dimensions.get('window').width;
  const imageWidth = width / 3;

  return (
    <FlatList
      data={feedList}
      style={{ width }}
      keyExtractor={(item, index) => {
        return `image-feed-${id}-${index}`;
      }}
      showsVerticalScrollIndicator={false}
      scrollEnabled={scrollEnabled}
      bounces={bounces}
      numColumns={3}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      refreshing={loading}
      onScroll={onScroll}
      scrollEventThrottle={400}
      renderItem={({ item, index }) => (
        <ImageContainer
          style={{
            paddingLeft: index % 3 === 0 ? 0 : 1,
            paddingRight: index % 3 === 2 ? 0 : 1,
          }}
          onPress={onPress}>
          <Image
            source={{ uri: item.images[0] }}
            style={{ width: imageWidth, height: imageWidth }}
          />
        </ImageContainer>
      )}
    />
  );
};

export default ImageFeedList;
