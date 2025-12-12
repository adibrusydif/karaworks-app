import React from 'react';
import { ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image } from 'expo-image';
import { Icons } from '@assets';
import { View, Header, StatusTag, Button, Text, InfoRow } from '@components';
import { Blurhash, FormatDate, shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { WorkerStackParamList } from '@type/navigation';
import { formatCurrency } from '@utils';
import { convertDate } from '@utils/dates';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerEventDetail'>;

const WorkerEventDetail: React.FC<Props> = ({ navigation, route }) => {
  const { paddingBottom } = useInset();
  const { event } = route.params;
  const hotel = event.event_creator.hotel;

  const status = '';
  const showWorkerTime = false;

  const renderWorkerTime = () => {
    if (!showWorkerTime) {
      return (
        <View style={styles.applicantContainer}>
          <View flex={1} row justifyContent="space-between">
            <Text type="body2Regular" color="NEUTRAL_70">
              Applicants
            </Text>
            <Text type="body1SemiBold">20 Applicants</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.applicantContainer}>
        <View flex={1} row alignItems="center" gap={4}>
          <Icons.IcClockIn />
          <Text type="captionSemiBold" color="SUCCESS_MAIN">
            07:00
          </Text>
        </View>
        <View flex={1} row alignItems="center" gap={4}>
          <Icons.IcClockOut />
          <Text type="captionSemiBold" color="DANGER_MAIN">
            18:12
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View flex={1}>
      <Header label="Event Detail" onBack={() => navigation.goBack()} />
      <ScrollView>
        <View flex={1} padding={16} gap={12}>
          {status && <StatusTag status="applied" />}
          <Image
            source={{ uri: event.event_photo }}
            style={styles.eventImage}
            placeholder={{ blurhash: Blurhash }}
            transition={1000}
          />
          <View gap={4}>
            <Text type="subtitle2Medium">{event.event_name}</Text>
            <Text type="body2Regular" color="NEUTRAL_70" lineHeight={18}>
              {event.event_description}
            </Text>
          </View>
          <View row alignItems="center" gap={8}>
            <Image
              source={{ uri: hotel.hotel_logo }}
              style={styles.hotelImage}
              placeholder={{ blurhash: Blurhash }}
              transition={1000}
            />
            <Text type="body2Medium">{hotel.hotel_name}</Text>
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
            label={convertDate(event.event_date, FormatDate.FULL)}
          />

          <View paddingTop={12} gap={4}>
            {status && (
              <Text type="body2Regular">Applied On 1 November 2025</Text>
            )}

            {renderWorkerTime()}
          </View>
        </View>
      </ScrollView>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button
          label="Scan QR Clock In"
          onPress={() => navigation.navigate('WorkerQRScanner')}
        />
      </View>
    </View>
  );
};

export default WorkerEventDetail;
