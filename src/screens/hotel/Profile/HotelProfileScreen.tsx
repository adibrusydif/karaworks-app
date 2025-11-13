import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '@components';

const HotelProfileScreen = () => {
  return (
    <SafeAreaView edges={['top']}>
      <View padding={16}>
        <Text type="subtitle1Medium">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default HotelProfileScreen;
