import React from 'react';
import { Icons } from '@assets';
import { View, Text } from '@components';

interface UserTimeProps {
  clockIn: string;
  clockOut: string;
}

const UserTime: React.FC<UserTimeProps> = ({
  clockIn = '-',
  clockOut = '-',
}) => {
  return (
    <View row gap={16}>
      <View row alignItems="center" gap={4}>
        <Icons.IcClockIn />
        <Text type="captionSemiBold" color="SUCCESS_MAIN">
          {clockIn ?? '-'}
        </Text>
      </View>
      <View row alignItems="center" gap={4}>
        <Icons.IcClockOut />
        <Text type="captionSemiBold" color="DANGER_MAIN">
          {clockOut ?? '-'}
        </Text>
      </View>
    </View>
  );
};

export default UserTime;
