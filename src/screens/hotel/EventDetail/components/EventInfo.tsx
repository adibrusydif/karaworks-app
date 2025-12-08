import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Icons } from '@assets';
import { View, Text, StatusTag, InfoRow } from '@components';
import { Blurhash, FormatDate } from '@constants';
import { Event } from '@type/models/event';
import { formatCurrency } from '@utils';
import { convertDate } from '@utils/dates';
import styles from './styles';

interface EventInfoProps {
  event: Event;
}

const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <View gap={12}>
      <StatusTag status={event.event_status} />
      <View row gap={16}>
        <Image
          source={{ uri: event.event_photo }}
          placeholder={{ blurhash: Blurhash }}
          style={styles.eventImage}
          transition={1000}
        />
        <View flex={1} gap={4}>
          <Text type="subtitle2Medium">{event.event_name}</Text>
          <Text
            style={styles.descEvent}
            numberOfLines={!isReadMore ? 5 : undefined}>
            {event.event_description}
          </Text>
          <Pressable onPress={() => setIsReadMore(!isReadMore)}>
            <Text type="body2SemiBold">
              {isReadMore ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
      </View>
      <View row gap={12}>
        <InfoRow
          icon={<Icons.IcMoney />}
          label={formatCurrency(event.event_salary)}
        />
        <InfoRow
          icon={<Icons.IcPeople />}
          label={`${event.event_person_count} Workers`}
        />
      </View>
      <InfoRow
        icon={<Icons.IcCalendar />}
        label={convertDate(event?.event_date, FormatDate.FULL)}
      />
    </View>
  );
};

export default EventInfo;
