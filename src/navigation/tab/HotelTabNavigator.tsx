import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@constants';
import {
  HotelBillScreen,
  HotelEventScreen,
  HotelProfileScreen,
} from '@screens';
import { HotelTabParamList } from '@type/navigation';

const Tab = createBottomTabNavigator<HotelTabParamList>();

const HotelTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      sceneStyle: { backgroundColor: Colors.NEUTRAL_10 },
      animation: 'shift',
    }}>
    <Tab.Screen
      name="HotelEvent"
      component={HotelEventScreen}
      options={{ title: 'My Event' }}
    />
    <Tab.Screen
      name="HotelBill"
      component={HotelBillScreen}
      options={{ title: 'Bill' }}
    />
    <Tab.Screen
      name="HotelProfile"
      component={HotelProfileScreen}
      options={{ title: 'Profile' }}
    />
  </Tab.Navigator>
);

export default HotelTabNavigator;
