import React from 'react';
import { Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Icons } from '@assets';
import {
  View,
  Header,
  TextInput,
  Button,
  TextInputArea,
  Text,
} from '@components';
import { Colors, shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { HotelStackParamList } from '@type/navigation';
import { scale } from '@utils';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'HotelCreateEvent'>;

const HotelCreateEventScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();
  return (
    <View flex={1}>
      <Header label="Create Event" onBack={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bottomOffset={scale(32)}>
        <View flex={1} padding={16} gap={16}>
          <TextInput label="Event Name" placeholder="Enter event name" />

          {/* Add Photo */}
          <Pressable>
            <View gap={8}>
              <Text type="body2Regular" color="NEUTRAL_70">
                Event Photo
              </Text>
              <View style={styles.photoContainer}>
                <Icons.IcAdd stroke={Colors.PRIMARY_MAIN} />
                <Text type="captionMedium" color="NEUTRAL_60">
                  Add Photo
                </Text>
              </View>
            </View>
          </Pressable>

          <TextInputArea
            label="Description / Rules"
            placeholder="Enter description / rules"
          />

          <TextInput
            label="Event Date"
            placeholder="Select date"
            iconRight={Icons.IcCalendar}
            editable={false}
            onPress={() => {}}
          />

          <TextInput
            label="Event Time"
            placeholder="Select time"
            iconRight={Icons.IcClock}
            editable={false}
            onPress={() => {}}
          />

          <TextInput
            label="Salary per Worker"
            prefix="Rp"
            placeholder="Enter salary per worker"
          />

          <TextInput label="Workers" placeholder="Enter total workers" />
        </View>
      </KeyboardAwareScrollView>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button label="Create Event" />
      </View>
    </View>
  );
};

export default HotelCreateEventScreen;
