import React from 'react';
import { View, Text } from '@components';

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label }) => {
  return (
    <View row gap={8} alignItems="center">
      {icon}
      <Text type="body2Medium">{label}</Text>
    </View>
  );
};

export default InfoRow;
