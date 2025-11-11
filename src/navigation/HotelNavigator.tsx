import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HotelStackParamList } from '@type/navigation';
import HotelTabNavigator from './tab/HotelTabNavigator';
import { HotelCreateEventScreen, HotelEventDetailScreen } from '@screens';
import { Colors } from '@constants';

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
    </Stack.Navigator>
  );
};

export default HotelNavigator;
