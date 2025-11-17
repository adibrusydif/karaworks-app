import React, { useState } from 'react';
import { Image, Pressable, StatusBar } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Route,
  SceneMap,
  TabBar,
  TabBarProps,
  TabView,
} from 'react-native-tab-view';
import { Icons, Images } from '@assets';
import { View, Text, FloatingButton } from '@components';
import { Colors } from '@constants';
import { useInset } from '@hooks';
import { HotelStackParamList, HotelTabParamList } from '@type/navigation';
import { deviceWidth } from '@utils';
import TabListEvent from './components/TabListEvent';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HotelTabParamList, 'HotelEvent'>,
  StackScreenProps<HotelStackParamList>
>;

const routes = [
  { key: 'posted', title: 'Posted' },
  { key: 'ongoing', title: 'Ongoing' },
  { key: 'finished', title: 'Finished' },
];

const renderScene = SceneMap({
  posted: () => <TabListEvent />,
  ongoing: () => <TabListEvent />,
  finished: () => <TabListEvent />,
});

const HotelEventScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingTop } = useInset();

  const [index, setIndex] = useState(0);

  const renderTabBar = (props: TabBarProps<Route>) => {
    return (
      <TabBar
        {...props}
        gap={4}
        style={styles.tabContainer}
        tabStyle={styles.tabBar}
        indicatorStyle={{ backgroundColor: Colors.PRIMARY_MAIN }}
        activeColor={Colors.PRIMARY_MAIN}
        inactiveColor={Colors.NEUTRAL_50}
      />
    );
  };

  return (
    <View flex={1} padding={16} paddingTop={paddingTop}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View row justifyContent="space-between" alignItems="center">
        <Text type="subtitle1SemiBold">{'Kara\nWorks.'}</Text>
        <Pressable style={styles.iconContainer}>
          <Icons.IcBell stroke={'white'} />
        </Pressable>
      </View>
      <View paddingVertical={16} gap={4}>
        <Text type="body2Regular" color="NEUTRAL_70">
          Welcome Back,
        </Text>
        <Text type="subtitle1Medium">Hotel Harris</Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: deviceWidth }}
        renderTabBar={renderTabBar}
      />

      <FloatingButton
        label="Create Event"
        onPress={() => navigation.navigate('HotelCreateEvent')}
      />
      <Image source={Images.bgUp} style={styles.bgUp} />
    </View>
  );
};

export default HotelEventScreen;
