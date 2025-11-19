import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { Icons, Images } from '@assets';
import { View, Text, StatusTag, InfoRow } from '@components';
import styles from './styles';

const EventInfo = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <View gap={12}>
      <StatusTag status="posted" />
      <View row gap={16}>
        <Image source={Images.dummyEvent1} style={styles.eventImage} />
        <View flex={1} gap={4}>
          <Text type="subtitle2Medium">Halloween Party</Text>
          <Text style={styles.descEvent} numberOfLines={5}>
            Lorem ipsum dolor sit amet consectetur. Potenti faucibus integer
            cursus morbi donec. Sed dui eros tincidunt tortor enim curabitur
          </Text>
          <Pressable onPress={() => setIsReadMore(!isReadMore)}>
            <Text type="body2SemiBold">
              {isReadMore ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
      </View>
      <View row gap={12}>
        <InfoRow icon={<Icons.IcMoney />} label="Rp100.000" />
        <InfoRow icon={<Icons.IcPeople />} label="5 Workers" />
      </View>
      <InfoRow icon={<Icons.IcCalendar />} label="31 October 2025, 20:00 WIB" />
    </View>
  );
};

export default EventInfo;
