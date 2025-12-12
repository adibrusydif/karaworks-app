import React from 'react';
import { View, Text, Button } from '@components';
import styles from './styles';

interface NoGrantedProps {
  requestPermission: () => void;
}

const NoGranted: React.FC<NoGrantedProps> = ({ requestPermission }) => {
  return (
    <View style={styles.noGrantedContainer}>
      <Text center color="WHITE">
        Please grant camera permission to scan QR code.
      </Text>
      <Button label="Request Permission Camera" onPress={requestPermission} />
    </View>
  );
};

export default NoGranted;
