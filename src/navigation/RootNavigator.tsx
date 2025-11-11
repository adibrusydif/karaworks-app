import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@type/navigation';
import AuthNavigator from './AuthNavigator';
import WorkerNavigator from './WorkerNavigator';
import HotelNavigator from './HotelNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const token = '';
  const role: string | null = 'hotel';

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : role === 'worker' ? (
        <Stack.Screen name="Worker" component={WorkerNavigator} />
      ) : (
        <Stack.Screen name="Hotel" component={HotelNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
