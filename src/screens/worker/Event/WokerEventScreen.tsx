import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Route,
  SceneMap,
  TabBar,
  TabBarProps,
  TabView,
} from 'react-native-tab-view';
import { View, Text } from '@components';
import { Colors } from '@constants';
import { deviceWidth } from '@utils';
import TabListEvent from './components/TabListEvent';
import styles from './styles';

const routes = [
  { key: 'applied', title: 'Applied' },
  { key: 'approved', title: 'Approved' },
  { key: 'ongoing', title: 'Ongoing' },
  { key: 'finished', title: 'Finished' },
];

const renderScene = SceneMap({
  applied: () => <TabListEvent />,
  approved: () => <TabListEvent />,
  ongoing: () => <TabListEvent />,
  finished: () => <TabListEvent />,
});

const WokerEventScreen = () => {
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
    <SafeAreaView edges={['top']} style={styles.container}>
      <View flex={1} padding={16} gap={24}>
        <Text type="subtitle1Medium">My Event</Text>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: deviceWidth }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default WokerEventScreen;
