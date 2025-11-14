import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Images } from '@assets';
import { ActionItem, ProfileUser, Text, View } from '@components';
import styles from './styles';

const HotelProfileScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View paddingBottom={16}>
        <Text type="subtitle1Medium">Profile</Text>
      </View>
      <ProfileUser
        label="Hotel Profile"
        image={Images.dummyHotelProfile}
        name="Hotel Name"
        contact="Hotel Contact"
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
      <ProfileUser
        label="User Profile"
        image={Images.dummyUserProfile}
        name="User Name"
        contact="User Contact"
        onEdit={() => {}}
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
      <ActionItem
        icon={<Icons.IcUserRemove />}
        label="Remove Account"
        tone="danger"
        onPress={() => {}}
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
      <ActionItem
        icon={<Icons.IcLogout />}
        label="Logout"
        tone="danger"
        onPress={() => {}}
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
    </SafeAreaView>
  );
};

export default HotelProfileScreen;
