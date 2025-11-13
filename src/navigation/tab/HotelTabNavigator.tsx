import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Colors } from '@constants';
import {
  HotelBillScreen,
  HotelEventScreen,
  HotelProfileScreen,
} from '@screens';
import { HotelTabParamList } from '@type/navigation';
import BottomTab from './BottomTab';

const Tab = createBottomTabNavigator<HotelTabParamList>();

const HotelTabNavigator = () => {
  const renderBottomTabBar = (props: BottomTabBarProps) => {
    return <BottomTab {...props} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'shift',
        sceneStyle: { backgroundColor: Colors.NEUTRAL_10 },
        tabBarStyle: { backgroundColor: Colors.WHITE },
      }}
      tabBar={renderBottomTabBar}>
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
};
export default HotelTabNavigator;
