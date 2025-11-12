import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, TextInput, View } from '@components';
import { Images } from '@assets';
import styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@type/navigation';

type Props = StackScreenProps<AuthStackParamList, 'Signup'>;

const PREFIX = '+62';

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
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
            Sign up to create your account
          </Text>
        </View>

        <View gap={16}>
          <TextInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            label="Mobile Phone"
            value={phone}
            desc="format: +6281234567890"
            onChangeText={handleChangeText}
            keyboardType="phone-pad"
          />
          <Button
            label="Sign Up"
            onPress={() => navigation.navigate('OtpConfirmation')}
          />

          <Pressable onPress={() => navigation.popTo('Login')}>
            <Text center type="body1Regular" color="NEUTRAL_70">
              Already have an account?{' '}
              <Text type="body1SemiBold">Sign In Now</Text>
            </Text>
          </Pressable>
        </View>
      </View>
      <Image source={Images.bgDown} style={styles.bgDown} />
    </SafeAreaView>
  );
};

export default SignupScreen;
