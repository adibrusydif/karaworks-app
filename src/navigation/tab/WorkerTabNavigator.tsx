import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Colors } from '@constants';
import {
  WorkerEventScreen,
  WorkerExploreScreen,
  WorkerProfileScreen,
} from '@screens';
import { WorkerTabParamList } from '@type/navigation';
import BottomTab from './BottomTab';

const Tab = createBottomTabNavigator<WorkerTabParamList>();

const WorkerTabNavigator = () => {
  const renderBottomTabBar = (props: BottomTabBarProps) => {
    return <BottomTab {...props} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'shift',
        headerShown: false,
        sceneStyle: { backgroundColor: Colors.NEUTRAL_10 },
        tabBarStyle: { backgroundColor: Colors.WHITE },
      }}
      tabBar={renderBottomTabBar}>
      <Tab.Screen
        name="WorkerExplore"
        component={WorkerExploreScreen}
        options={{ title: 'Explore' }}
      />
      <Tab.Screen
        name="WorkerEvent"
        component={WorkerEventScreen}
        options={{ title: 'My Event' }}
      />
      <Tab.Screen
        name="WorkerProfile"
        component={WorkerProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default WorkerTabNavigator;
