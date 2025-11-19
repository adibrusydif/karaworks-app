import React, { useMemo } from 'react';
import { Image, Pressable } from 'react-native';
import { Images } from '@assets';
import { Text, View } from '@components/atoms';
import styles from './styles';

interface EventCardProps {
  onPress?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ onPress }) => {
  const imageSource = useMemo(
    () => (Math.random() < 0.5 ? Images.dummyEvent1 : Images.dummyEvent2),
    [],
  );

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <View flex={1} row justifyContent="space-between">
        <View gap={4}>
          <Text type="body2Medium">Event Workshops</Text>
          <Text type="captionRegular" color="NEUTRAL_70">
            31 Oct 2025, 20:00 WIB
          </Text>
        </View>
        <View justifyContent="flex-end" alignItems="flex-end">
          <Text type="captionRegular" color="NEUTRAL_70">
            5 Applicants
          </Text>
          <Text type="body2Medium">Rp400.000</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default EventCard;
