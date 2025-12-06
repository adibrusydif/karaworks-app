import React from 'react';
import { Image, Pressable } from 'react-native';
import { Icons } from '@assets';
import { Text, View } from '@components/atoms';
import { Event } from '@type/models/event';
import { formatCurrency } from '@utils';
import { convertDate } from '@utils/dates';
import styles from './styles';

interface EventCardProps {
  event: Event;
  onPress?: () => void;
  showIconSalary?: boolean;
  showSalary?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onPress,
  showIconSalary,
  showSalary = true,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: event?.event_photo }} style={styles.image} />
      <View flex={1}>
        <View flex={1} gap={4}>
          <Text type="body2Medium">{event?.event_name ?? '-'}</Text>
          <Text type="captionRegular" color="NEUTRAL_70">
            {convertDate(event?.event_date, 'DD MMM YYYY, HH:mm WIB')}
          </Text>
        </View>
        <View justifyContent="flex-end" alignItems="flex-end">
          <Text type="captionRegular" color="NEUTRAL_70">
            {`${event?.event_person_count ?? 0} Applicants`}
          </Text>
          {showSalary && (
            <View row gap={8} alignItems="center">
              {showIconSalary && <Icons.IcMoney />}
              <Text type="body2Medium">
                {formatCurrency(event?.event_salary ?? 0)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default EventCard;
