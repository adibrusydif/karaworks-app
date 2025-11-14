import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '@constants';
import {
  HotelBillDetailScreen,
  HotelCreateEventScreen,
  HotelEventDetailScreen,
} from '@screens';
import { HotelStackParamList } from '@type/navigation';
import HotelTabNavigator from './tab/HotelTabNavigator';

const Stack = createStackNavigator<HotelStackParamList>();

const HotelNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.NEUTRAL_10 },
      }}>
      <Stack.Screen name="HotelTabs" component={HotelTabNavigator} />
      <Stack.Screen
        name="HotelCreateEvent"
        component={HotelCreateEventScreen}
      />
      <Stack.Screen
        name="HotelEventDetail"
        component={HotelEventDetailScreen}
      />
      <Stack.Screen name="HotelBillDetail" component={HotelBillDetailScreen} />
    </Stack.Navigator>
  );
};

export default HotelNavigator;
