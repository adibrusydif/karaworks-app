import React from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Images } from '@assets';
import { ActionItem, Button, ProfileUser, Text, View } from '@components';
import { WorkerStackParamList, WorkerTabParamList } from '@type/navigation';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<WorkerTabParamList, 'WorkerProfile'>,
  StackScreenProps<WorkerStackParamList>
>;

const WorkerProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View paddingBottom={16}>
        <Text type="subtitle1Medium">Profile</Text>
      </View>
      <ProfileUser
        image={Images.dummyUserProfile}
        name="Fikri Sulaiman"
        contact="+6285271827213"
        onEdit={() => navigation.navigate('EditProfile')}
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
      <View style={styles.bankInfoContainer} backgroundColor="NEUTRAL_20">
        <View gap={8}>
          <Text type="body2Regular" color="NEUTRAL_70">
            Bank Account Info
          </Text>
          <View>
            <Text type="body1SemiBold">BCA</Text>
            <Text type="body1SemiBold">126471296</Text>
            <Text type="body1SemiBold">Fikri Sulaiman</Text>
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
        onPress={() => {}}
      />
      <View height={1} backgroundColor="NEUTRAL_30" />
    </SafeAreaView>
  );
};

export default WorkerProfileScreen;
