import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@constants';
import { WorkerTabParamList } from '../../types/navigation';
import {
  WorkerEventScreen,
  WorkerExploreScreen,
  WorkerProfileScreen,
} from '@screens';

const Tab = createBottomTabNavigator<WorkerTabParamList>();

const WorkerTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      sceneStyle: { backgroundColor: Colors.NEUTRAL_10 },
      animation: 'shift',
    }}>
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

export default WorkerTabNavigator;
