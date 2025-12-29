import React from 'react';
import { Image, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Images } from '@assets';
import { Button, Header, Text, TextInput, View } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { AuthStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<AuthStackParamList, 'OtpConfirmation'>;

const OtpConfirmationScreen: React.FC<Props> = ({ navigation, route }) => {
  const { paddingBottom } = useInset();
  const { phone } = route.params;

  return (
    <View style={styles.container}>
      <Header label="OTP Confirmation" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16}>
        <Image source={Images.otpConfirm} style={styles.imgOtp} />
        <View gap={32}>
          <Text center type="body2Regular">
            Enter the 4-digit code received on this mobile phone number{' '}
            <Text type="body2SemiBold">{phone}</Text>
          </Text>
          <View alignSelf="center">
            <TextInput
              maxLength={4}
              keyboardType="number-pad"
              width={80}
              textAlign="center"
              textAlignVertical="center"
            />
          </View>

          <View gap={16}>
            <View gap={8}>
              <Text center type="body2Regular">
                Didn’t receive the code?
              </Text>
              <Text center type="buttonSemiBold" color="NEUTRAL_50">
                01:00
              </Text>
            </View>
            <Pressable onPress={() => navigation.popTo('Login')}>
              <Text center type="body2SemiBold">
                Change Number
              </Text>
            </Pressable>
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
