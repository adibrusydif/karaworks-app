import React from 'react';
import { Icons } from '@assets';
import { View, Text } from '@components';

const UserTime = () => {
  return (
    <View row gap={16}>
      <View row alignItems="center" gap={4}>
        <Icons.IcClockIn />
        <Text type="captionSemiBold" color="SUCCESS_MAIN">
          18:00:12
        </Text>
      </View>
      <View row alignItems="center" gap={4}>
        <Icons.IcClockOut />
        <Text type="captionSemiBold" color="DANGER_MAIN">
          18:00:12
        </Text>
      </View>
    </View>
  );
};

export default UserTime;
