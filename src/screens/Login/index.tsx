import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Fonts from '@constants/Fonts';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: Fonts.OPEN_SAUCE_ONE_EXTRA_BOLD }}>Login</Text>
    </View>
  );
};

export default Login;
