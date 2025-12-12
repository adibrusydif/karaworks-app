import React from 'react';
import { Pressable } from 'react-native';
import { Icons } from '@assets';
import { Text, View } from '@components';
import styles from './styles';

interface HeaderQRProps {
  onBack: () => void;
}

const HeaderQR: React.FC<HeaderQRProps> = ({ onBack }) => {
  return (
    <View row justifyContent="space-between" alignItems="center">
      <Pressable style={styles.closeContainer} onPress={onBack}>
        <Icons.IcClose />
      </Pressable>
      <Text type="subtitle2Medium" color="WHITE">
        Scan QR Code
      </Text>
      <View style={styles.emptyContainer} />
    </View>
  );
};

export default HeaderQR;
