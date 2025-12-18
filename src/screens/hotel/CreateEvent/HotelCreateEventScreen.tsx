import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'expo-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Icons } from '@assets';
import {
  View,
  Header,
  TextInput,
  Button,
  TextInputArea,
  Text,
  ModalLoading,
} from '@components';
import { Colors, shadowTypes } from '@constants';
import { useInset, useImagePicker, useForm } from '@hooks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { createEvent } from '@store/slice/event/eventCreateSlice';
import { uploadEventPhoto } from '@store/slice/event/eventPhotoSlice';
import { EventPayload, EventPhotoPayload } from '@type/api/event';
import { HotelStackParamList } from '@type/navigation';
import { scale, formatThousands, toNumber } from '@utils';
import { convertDate } from '@utils/dates';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'HotelCreateEvent'>;

const HotelCreateEventScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();
  const { uri: image, pickImage, clearImage } = useImagePicker();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.eventCreate.isLoading);
  const isLoadingPhoto = useAppSelector((state) => state.eventPhoto.isLoading);

  const [form, setForm] = useForm({
    name: '',
    desc: '',
    date: new Date(),
    salaryPerWorker: '',
    worker: '',
  });

  const [isDateVisible, setIsDateVisible] = useState(false);

  const handleSubmit = async () => {
    const payload: EventPayload = {
      event_creator_id: 'af33511c-a5ab-4ecc-acdd-2de7079e6871', // TODO: get from auth
      event_name: form.name,
      event_description: form.desc,
      event_date: form.date,
      event_salary: toNumber(form.salaryPerWorker),
      event_person_count: toNumber(form.worker),
    };

    dispatch(createEvent(payload))
      .unwrap()
      .then(async (res) => {
        const photoPayload: EventPhotoPayload = {
          eventId: res.data.event_id,
          imageUri: image || '',
        };

        await dispatch(uploadEventPhoto(photoPayload));
        navigation.replace('HotelSuccessCreateEvent');
      });
  };

  const handleSelectDate = (date: Date) => {
    setForm({ date: date });
    setIsDateVisible(false);
  };

  return (
    <View flex={1}>
      <Header label="Create Event" onBack={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bottomOffset={scale(32)}>
        <View flex={1} padding={16} gap={16}>
          <TextInput
            label="Event Name"
            placeholder="Enter event name"
            value={form.name}
            onChangeText={(text) => setForm({ name: text })}
          />

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
            value={form.desc}
            onChangeText={(text) => setForm({ desc: text })}
          />

          <TextInput
            label="Event Date"
            placeholder="Select date"
            value={convertDate(form.date.toString(), 'DD MMMM YYYY, hh:mm a')}
            iconRight={Icons.IcCalendar}
            editable={false}
            onPress={() => setIsDateVisible(true)}
          />

          <TextInput
            label="Salary per Worker"
            prefix="Rp"
            placeholder="Enter salary per worker"
            value={form.salaryPerWorker}
            onChangeText={(text) =>
              setForm({ salaryPerWorker: formatThousands(text) })
            }
          />

          <TextInput
            label="Workers"
            placeholder="Enter total workers"
            value={form.worker}
            onChangeText={(text) => setForm({ worker: formatThousands(text) })}
          />
        </View>
      </KeyboardAwareScrollView>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button
          label="Create Event"
          disabled={isLoading || isLoadingPhoto}
          isLoading={isLoading}
          onPress={handleSubmit}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDateVisible}
        mode="datetime"
        onConfirm={handleSelectDate}
        onCancel={() => setIsDateVisible(false)}
      />

      <ModalLoading visible={isLoadingPhoto} />
    </View>
  );
};

export default HotelCreateEventScreen;
