import React from 'react';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Images } from '@assets';
import { View, Text, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { AuthStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<AuthStackParamList, 'SuccessOtp'>;

const SuccessOTPScreen = ({ navigation }: Props) => {
  const { paddingBottom } = useInset();

  return (
    <View flex={1}>
      <View style={styles.container}>
        <Image source={Images.successOtp} style={styles.imgSuccessOtp} />
        <View gap={4}>
          <Text center type="headingS" lineHeight={30}>
            {'Your account has been\ncreated successfully!'}
          </Text>
          <Text center type="body1Regular" color="NEUTRAL_70">
            You’re all set to start exploring new job opportunities
          </Text>
        </View>
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button
          label="Start Exploring"
          onPress={() => navigation.navigate('SuccessOtp')}
        />
      </View>
    </View>
  );
};

export default SuccessOTPScreen;
