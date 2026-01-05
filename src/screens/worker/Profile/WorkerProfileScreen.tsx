import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '@assets';
import {
  ActionItem,
  Button,
  ModalLoading,
  ProfileUser,
  Text,
  View,
} from '@components';
import { clearAuth } from '@store/slice/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@storehooks';
import { WorkerStackParamList, WorkerTabParamList } from '@type/navigation';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<WorkerTabParamList, 'WorkerProfile'>,
  StackScreenProps<WorkerStackParamList>
>;

const WorkerProfileScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.authMe);

  const handleLogout = () => {
    dispatch(clearAuth());
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View paddingBottom={16}>
        <Text type="subtitle1Medium">Profile</Text>
      </View>
      <ProfileUser
        image={{ uri: data?.user_photo }}
        name={data?.user_name || '-'}
        contact={data?.user_phone || '-'}
        onEdit={() => navigation.navigate('EditProfile')}
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
      <View style={styles.bankInfoContainer} backgroundColor="NEUTRAL_20">
        <View gap={8}>
          <Text type="body2Regular" color="NEUTRAL_70">
            Bank Account Info
          </Text>
          <View>
            <Text type="body1SemiBold">{data?.bank?.bank_name || '-'}</Text>
            <Text type="body1SemiBold">{data?.bank_account_id || '-'}</Text>
            <Text type="body1SemiBold">{data?.bank_account_name || '-'}</Text>
          </View>
        </View>
        <Button
          label={'Edit'}
          typeText="buttonSMedium"
          width={48}
          height={34}
          buttonColor="PRIMARY_SURFACE"
          labelColor="PRIMARY_MAIN"
          onPress={() => navigation.navigate('WorkerEditBank')}
        />
      </View>
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

      <ModalLoading visible={isLoading} />
    </SafeAreaView>
  );
};

export default WorkerProfileScreen;
