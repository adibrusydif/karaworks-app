import React from 'react';
import { Image } from 'react-native';
import { Images } from '@assets';
import { View, Text, Button } from '@components';
import { useInset } from '@hooks';
import styles from './styles';

interface SuccessQRProps {
  onPress: () => void;
}

const SuccessQR: React.FC<SuccessQRProps> = ({ onPress }) => {
  const { paddingBottom } = useInset();
  return (
    <View flex={1}>
      <View style={styles.successContainer}>
        <Image source={Images.successCreateEvent} style={styles.imgSuccess} />
        <View gap={4}>
          <Text center type="headingS" lineHeight={30}>
            QR Code Scanned Successfully!
          </Text>
          <Text center type="body1Regular" color="NEUTRAL_70" lineHeight={21}>
            Continue to clock in or clock out.
          </Text>
        </View>
      </View>
      <View backgroundColor="WHITE" padding={16} paddingBottom={paddingBottom}>
        <Button label="Continue" onPress={onPress} />
      </View>
    </View>
  );
};

export default SuccessQR;
