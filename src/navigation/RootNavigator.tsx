import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { loadAuth } from '@store/slice/auth/authSlice';
import { RootStackParamList } from '@type/navigation';
import AuthNavigator from './AuthNavigator';
import HotelNavigator from './HotelNavigator';
import WorkerNavigator from './WorkerNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const { token, role } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadAuth());
  }, [dispatch]);

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
