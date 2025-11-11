import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, TextInput, View } from '@components';
import styles from './styles';
import { Images } from '@assets';

const PREFIX = '+62';

const LoginScreen = () => {
  const [phone, setPhone] = useState(PREFIX);

  const handleChangeText = (raw: string) => {
    const trimmed = raw.trim();

    // If user attempts to delete below prefix length, keep current prefix and stop
    if (trimmed.length <= PREFIX.length) {
      if (phone !== PREFIX) {
        setPhone(PREFIX);
      }

      return;
    }

    const withoutPrefix = trimmed.replace(/^\+?62/, '');
    const digitsOnly = withoutPrefix.replace(/[^0-9]/g, '');
    setPhone(PREFIX + digitsOnly);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.logo} style={styles.logo} />
      <View gap={32}>
        <View gap={4}>
          <Text type="headingS">Welcome to Kara Works!</Text>
          <Text type="body1Regular" color="NEUTRAL_70">
            Sign in to access your account
          </Text>
        </View>

        <View gap={16}>
          <TextInput
            label="Mobile Phone"
            value={phone}
            desc="format: +6281234567890"
            onChangeText={handleChangeText}
            keyboardType="phone-pad"
          />
          <Button label="Sign In" />

          <Pressable>
            <Text center type="body1Regular" color="NEUTRAL_70">
              Don’t have an account?{' '}
              <Text type="body1SemiBold">Sign Up Now</Text>
            </Text>
          </Pressable>
        </View>
      </View>
      <Image source={Images.bgDown} style={styles.bgDown} />
    </SafeAreaView>
  );
};

export default LoginScreen;
