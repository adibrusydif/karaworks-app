import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkerStackParamList } from '../types/navigation';
import WorkerTabNavigator from './tab/WorkerTabNavigator';
import { WorkerEventDetailScreen } from '@screens';
import { Colors } from '@constants';

const Stack = createStackNavigator<WorkerStackParamList>();

const WorkerNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.NEUTRAL_10 },
      }}>
      <Stack.Screen name="WorkerTabs" component={WorkerTabNavigator} />
      <Stack.Screen
        name="WorkerEventDetail"
        component={WorkerEventDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default WorkerNavigator;
