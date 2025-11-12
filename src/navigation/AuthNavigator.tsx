import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '@type/navigation';
import {
  LoginScreen,
  OtpConfirmationScreen,
  SignupScreen,
  SuccessOtpScreen,
} from '@screens';
import { Colors } from '@constants';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: Colors.NEUTRAL_10 },
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="OtpConfirmation" component={OtpConfirmationScreen} />
    <Stack.Screen name="SuccessOtp" component={SuccessOtpScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
