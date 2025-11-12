import React from 'react';
import { Pressable, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from '@components/atoms';
import { Colors } from '@constants';
import styles from './styles';
import { scale } from '@utils';
import { Icons } from '@assets';

interface HeaderProps {
  label?: string;
  onBack?: () => void;
}

const Header = ({ label, onBack }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top ? insets.top + scale(16) : scale(16);

  return (
    <>
      <StatusBar barStyle={'default'} backgroundColor={Colors.WHITE} />
      <View style={[styles.container, { paddingTop }]}>
        <Pressable style={styles.iconContainer} onPress={onBack}>
          <Icons.IcArrowLeft width={scale(16)} height={scale(16)} />
        </Pressable>
        <Text type="body1Regular">{label}</Text>
      </View>
    </>
  );
};

export default Header;
