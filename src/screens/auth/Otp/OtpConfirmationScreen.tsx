import React from 'react';
import { Button, Header, Text, TextInput, View } from '@components';
import { Image } from 'react-native';
import { Images } from '@assets';
import styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@type/navigation';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';

type Props = StackScreenProps<AuthStackParamList, 'OtpConfirmation'>;

const OtpConfirmationScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();

  return (
    <View style={styles.container}>
      <Header label="OTP Confirmation" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16}>
        <Image source={Images.otpConfirm} style={styles.imgOtp} />
        <View gap={32}>
          <Text center type="body2Regular">
            Enter the 4-digit code received on this mobile phone number{' '}
            <Text type="body2SemiBold">+62 8451 9126</Text>
          </Text>
          <TextInput placeholder="Enter OTP" />

          <View gap={16}>
            <View gap={8}>
              <Text center type="body2Regular">
                Didn’t receive the code?
              </Text>
              <Text center type="buttonSemiBold" color="NEUTRAL_50">
                01:00
              </Text>
            </View>
            <Text center type="body2SemiBold">
              Change Number
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button
          label="Submit"
          onPress={() => navigation.navigate('SuccessOtp')}
        />
      </View>
    </View>
  );
};

export default OtpConfirmationScreen;
