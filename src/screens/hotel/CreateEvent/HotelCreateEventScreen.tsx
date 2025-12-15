import React from 'react';
import { Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'expo-image';
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
import { useInset, useImagePicker } from '@hooks';
import { HotelStackParamList } from '@type/navigation';
import { scale } from '@utils';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'HotelCreateEvent'>;

const HotelCreateEventScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();
  const { uri: image, pickImage, clearImage } = useImagePicker();

  return (
    <View flex={1}>
      <Header label="Create Event" onBack={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bottomOffset={scale(32)}>
        <View flex={1} padding={16} gap={16}>
          <TextInput label="Event Name" placeholder="Enter event name" />

          {/* Add Photo */}
          <View>
            <View gap={8}>
              <Text type="body2Regular" color="NEUTRAL_70">
                Event Photo
              </Text>
              <View row alignItems="center" gap={8}>
                {image ? (
                  <Image
                    source={{ uri: image }}
                    style={styles.photoPreview}
                    contentFit="fill"
                  />
                ) : (
                  <Pressable
                    style={[styles.photoContainer]}
                    onPress={() => pickImage()}>
                    <Icons.IcAdd stroke={Colors.PRIMARY_MAIN} />
                    <Text type="captionMedium" color="NEUTRAL_60">
                      Add Photo
                    </Text>
                  </Pressable>
                )}
                {image && (
                  <View gap={4}>
                    <Button
                      typeText="captionSMedium"
                      label="Change Photo"
                      labelColor="PRIMARY_MAIN"
                      width={72}
                      height={24}
                      buttonColor="PRIMARY_SURFACE"
                      onPress={() => pickImage()}
                      elevation={false}
                    />
                    <Button
                      label="Remove"
                      typeText="captionSMedium"
                      labelColor="DANGER_MAIN"
                      width={72}
                      height={24}
                      buttonColor="DANGER_SURFACE"
                      onPress={clearImage}
                      elevation={false}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>

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
        <Button
          label="Create Event"
          onPress={() => navigation.navigate('HotelSuccessCreateEvent')}
        />
      </View>
    </View>
  );
};

export default HotelCreateEventScreen;
