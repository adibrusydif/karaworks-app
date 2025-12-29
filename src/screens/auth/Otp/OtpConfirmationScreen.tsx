import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Images } from '@assets';
import { Button, Header, Text, TextInput, View } from '@components';
import { shadowTypes, StorageKey } from '@constants';
import { useInset } from '@hooks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setAuth } from '@store/slice/auth/authSlice';
import { verifyOTP } from '@store/slice/auth/verifyOTPSlice';
import { AuthStackParamList } from '@type/navigation';
import { storeDataStorage } from '@utils/storage';
import styles from './styles';

type Props = StackScreenProps<AuthStackParamList, 'OtpConfirmation'>;

const OtpConfirmationScreen: React.FC<Props> = ({ navigation, route }) => {
  const { paddingBottom } = useInset();
  const { phone } = route.params;

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.verifyOTP);

  const [otp, setOtp] = useState('0000');

  const handleSubmit = () => {
    dispatch(verifyOTP({ phone_number: phone, otp_code: otp }))
      .unwrap()
      .then((res) => {
        // Save token and role to storage
        storeDataStorage(StorageKey.TOKEN, res.access_token);
        storeDataStorage(StorageKey.ROLE, res.user?.user_role || '');
        storeDataStorage(StorageKey.USER, res.user);

        // Set auth state
        dispatch(
          setAuth({
            token: res.access_token,
            role: res.user.user_role,
            user: res.user,
          }),
        );
      });
  };

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
              value={otp}
              onChangeText={setOtp}
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
          onPress={handleSubmit}
          disabled={isLoading || otp.length < 4}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

export default OtpConfirmationScreen;
