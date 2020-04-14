import React, {useState, useContext, useLayoutEffect, useEffect} from 'react';
import {
  NativeScrollEvent,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import {RandomUserDataContext} from '~/Context/RandomUserData';

import IconButton from '~/Components/IconButton';
import Tab from '~/Components/Tab';
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

const ProfileTabContainer = Styled.View`
  flex-direction: row;
  background-color: #FEFFFF;
`;

const FeedContainer = Styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageContainer = Styled.TouchableHighlight`
  background: #FEFFFF;
  padding: 1px;
`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>;
interface Props {
  navigation: NavigationProp;
}

const Profile = ({navigation}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const imageWidth = Dimensions.get('window').width / 3;
  const tabs = [
    require('~/Assets/Images/ic_grid_image_focus.png'),
    require('~/Assets/Images/ic_tag_image.png'),
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          iconName="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
    });
  }, []);

  useEffect(() => {
    setFeedList(getMyFeed(24));
  }, []);

  const isBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height;
  };

  return (
    <ScrollView
      stickyHeaderIndices={[2]}
      onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isBottom(event.nativeEvent)) {
          setFeedList([...feedList, ...getMyFeed(24)]);
        }
      }}>
      <ProfileHeader
        image="http://api.randomuser.me/portraits/women/68.jpg"
        posts={3431}
        follower={6530}
        following={217}
      />
      <ProfileBody
        name="Sara Lambert"
        description="On Friday, April 14, being Good-Friday, I repaired to him in the\nmorning, according to my usual custom on that day, and breakfasted\nwith him. I observed that he fasted so very strictly, that he did not\neven taste bread, and took no milk with his tea; I suppose because it\nis a kind of animal food."
      />
      <ProfileTabContainer>
        {tabs.map((image: ImageSourcePropType, index: number) => (
          <Tab
            key={`tab-${index}`}
            selected={index === 0}
            imageSource={image}
          />
        ))}
      </ProfileTabContainer>
      <FeedContainer>
        {feedList.map((feed: IFeed, index: number) => (
          <ImageContainer
            key={`feed-list-${index}`}
            style={{
              paddingLeft: index % 3 === 0 ? 0 : 1,
              paddingRight: index % 3 === 2 ? 0 : 1,
              width: imageWidth,
            }}>
            <Image
              source={{uri: feed.images[0]}}
              style={{width: imageWidth, height: imageWidth}}
            />
          </ImageContainer>
        ))}
      </FeedContainer>
    </ScrollView>
  );
};

export default Profile;
