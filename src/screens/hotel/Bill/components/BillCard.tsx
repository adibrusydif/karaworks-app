import React from 'react';
import { Pressable } from 'react-native';
import { View, Text, Button } from '@components';
import styles from './styles';

interface BillCardProps {
  onPressDetail?: () => void;
}

const BillCard: React.FC<BillCardProps> = ({ onPressDetail }) => {
  return (
    <Pressable style={styles.container}>
      <View row justifyContent="space-between" alignItems="center">
        <Text type="body1SemiBold">November 2025</Text>
        <Text type="body2Medium">Rp2.000.000</Text>
      </View>
      <View row justifyContent="space-between" alignItems="center">
        <View style={styles.statusContainer}>
          <Text type="captionSSemiBold" color={'WARNING_MAIN'}>
            Waiting for Payment
          </Text>
        </View>
        <View row gap={8}>
          <Button
            label="Download"
            typeText="buttonSMedium"
            height={36}
            width={100}
          />
          <Button
            label="Detail"
            typeText="buttonSMedium"
            height={36}
            width={60}
            labelColor="PRIMARY_MAIN"
            buttonColor="PRIMARY_SURFACE"
            onPress={onPressDetail}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default BillCard;
