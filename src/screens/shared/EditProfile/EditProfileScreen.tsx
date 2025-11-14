import React, { useState } from 'react';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Images } from '@assets';
import { View, Text, Header, TextInput, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { HotelStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'EditProfile'>;

const EditProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();

  const [username, setUsername] = useState('Fikri Sulaiman ');
  const [phone, setPhone] = useState('+6285271827213');

  return (
    <View flex={1}>
      <Header label="Edit User Profile" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16} gap={16}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View gap={16}>
          <Text type="body2Regular" color="NEUTRAL_70">
            Profile Photo
          </Text>
          <View row gap={8} alignItems="center">
            <Image source={Images.dummyUserProfile} style={styles.imgProfile} />
            <View gap={8}>
              <Button
                label="Change Photo"
                height={24}
                width={72}
                typeText="captionSMedium"
                labelColor="PRIMARY_MAIN"
                buttonColor="PRIMARY_SURFACE"
                elevation={false}
              />
              <Button
                label="Remove"
                height={24}
                width={72}
                typeText="captionSMedium"
                labelColor="DANGER_MAIN"
                buttonColor="DANGER_SURFACE"
                elevation={false}
              />
            </View>
          </View>
          <TextInput
            label="Mobile Phone"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button label="Save Changes" />
      </View>
    </View>
  );
};

export default EditProfileScreen;
