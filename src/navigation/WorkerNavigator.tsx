import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '@constants';
import {
  EditProfileScreen,
  WorkerEditBankScreen,
  WorkerEventDetailScreen,
} from '@screens';
import { WorkerStackParamList } from '@type/navigation';
import WorkerTabNavigator from './tab/WorkerTabNavigator';

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
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="WorkerEditBank" component={WorkerEditBankScreen} />
    </Stack.Navigator>
  );
};

export default WorkerNavigator;
