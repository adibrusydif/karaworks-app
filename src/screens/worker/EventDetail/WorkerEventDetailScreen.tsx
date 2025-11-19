import React from 'react';
import { Image, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Icons, Images } from '@assets';
import { View, Header, StatusTag, Button, Text, InfoRow } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { WorkerStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerEventDetail'>;

const WorkerEventDetail: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();

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
          <Image source={Images.dummyEvent1} style={styles.eventImage} />
          <View gap={4}>
            <Text type="subtitle2Medium">Halloween Party</Text>
            <Text type="body2Regular" color="NEUTRAL_70" lineHeight={18}>
              Lorem ipsum dolor sit amet consectetur. Potenti faucibus integer
              cursus morbi donec. Sed dui eros tincidunt tortor enim curabitur
            </Text>
          </View>
          <View row alignItems="center" gap={8}>
            <Image
              source={Images.dummyHotelProfile}
              style={styles.hotelImage}
            />
            <Text type="body2Medium">Hotel ABC</Text>
          </View>
          <View row gap={12}>
            <InfoRow icon={<Icons.IcMoney />} label="Rp100.000" />
            <InfoRow icon={<Icons.IcPeople />} label="5 Workers" />
          </View>
          <InfoRow
            icon={<Icons.IcCalendar />}
            label="31 October 2025, 20:00 WIB"
          />

          <View paddingTop={12} gap={4}>
            <Text type="body2Regular">Applied On 1 November 2025</Text>
            {renderWorkerTime()}
          </View>
        </View>
      </ScrollView>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button label="Apply" />
      </View>
    </View>
  );
};

export default WorkerEventDetail;
