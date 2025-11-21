import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '@constants';
import {
  EditProfileScreen,
  WorkerEditBankScreen,
  WorkerEventDetailScreen,
  WorkerSuccessWithdrawScreen,
  WorkerWalletScreen,
  WorkerWithdrawScreen,
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
      <Stack.Screen name="WorkerWallet" component={WorkerWalletScreen} />
      <Stack.Screen name="WorkerWithdraw" component={WorkerWithdrawScreen} />
      <Stack.Screen
        name="WorkerSuccessWithdraw"
        component={WorkerSuccessWithdrawScreen}
      />
    </Stack.Navigator>
  );
};

export default WorkerNavigator;
