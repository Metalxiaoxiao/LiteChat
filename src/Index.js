import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import StorageUtil from './storage';

const ChatRoute = () => <Text>聊天</Text>;

const FriendsRoute = () => <Text>好友</Text>;

const PostsRoute = () => <Text>动态</Text>;


const Index = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chat', title: '聊天', focusedIcon: 'chat', unfocusedIcon: 'chat-outline'},
    { key: 'friends', title: '好友', focusedIcon: 'contacts' },
    { key: 'posts', title: '动态', focusedIcon: 'book' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chat: ChatRoute,
    friends: FriendsRoute,
    posts: PostsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Index;