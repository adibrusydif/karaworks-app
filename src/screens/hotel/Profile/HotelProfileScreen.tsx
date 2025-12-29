import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Images } from '@assets';
import { ActionItem, ProfileUser, Text, View } from '@components';
import { useAppDispatch } from '@store/hooks';
import { clearAuth } from '@store/slice/auth/authSlice';
import { HotelStackParamList, HotelTabParamList } from '@type/navigation';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HotelTabParamList, 'HotelProfile'>,
  StackScreenProps<HotelStackParamList>
>;

const HotelProfileScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearAuth());
  };

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
        onEdit={() => navigation.navigate('EditProfile')}
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
        onPress={handleLogout}
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
    </SafeAreaView>
  );
};

export default HotelProfileScreen;
