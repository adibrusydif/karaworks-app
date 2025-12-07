import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Header, Text, Button, TabFilter } from '@components';
import { shadowTypes, Statuses } from '@constants';
import { useInset } from '@hooks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  getApplicationsEvent,
  resetApplicationsEvent,
} from '@store/slice/application/applicationEventSlice';
import { TabItem } from '@type/models/common';
import { HotelStackParamList } from '@type/navigation';
import EventInfo from './components/EventInfo';
import UserItem from './components/UserItem';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'HotelEventDetail'>;

const TAB_FILTER: TabItem[] = [
  { key: 'applicants', label: 'Applicants' },
  { key: 'selected', label: 'Selected' },
];

const HotelEventDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { paddingBottom } = useInset();
  const { event } = route.params;

  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.applicationEvent);

  const showButtonQR = event.event_status !== Statuses.POSTED;
  const showButton = event.event_status !== Statuses.POSTED;
  const isFinished = event.event_status === Statuses.FINISHED;
  const countUser = data.length;

  useEffect(() => {
    dispatch(getApplicationsEvent(event.event_id));

    return () => {
      dispatch(resetApplicationsEvent());
    };
  }, []);

  return (
    <View flex={1}>
      <Header label="Event Detail" onBack={() => navigation.goBack()} />
      <ScrollView>
        <View flex={1} padding={16} gap={16}>
          <EventInfo event={event} />
          <View height={1} backgroundColor="NEUTRAL_30" />

          {/* Show Button QR Code */}
          {showButtonQR && (
            <View row gap={16}>
              <Button
                label="Clock In"
                typeText="buttonSSemiBold"
                labelColor="SUCCESS_MAIN"
                buttonColor="SUCCESS_SURFACE"
                style={styles.flex1}
                elevation={false}
              />
              <Button
                label="Clock Out"
                typeText="buttonSSemiBold"
                labelColor="DANGER_MAIN"
                buttonColor="DANGER_SURFACE"
                style={styles.flex1}
                elevation={false}
              />
            </View>
          )}

          {/* Applicants */}
          <View gap={8}>
            <TabFilter data={TAB_FILTER} onTabPress={() => {}} />
            {isLoading ? (
              <View alignSelf="center" paddingTop={32}>
                <ActivityIndicator animating={isLoading} color="NEUTRAL_70" />
              </View>
            ) : (
              <>
                <Text type="body2Regular" color="NEUTRAL_70">
                  {`${countUser} Applicants`}
                </Text>

                {data.map((item) => (
                  <UserItem key={item.user_id} item={item} />
                ))}
              </>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Footer Action Button */}
      {showButton && (
        <View
          style={[styles.footer, shadowTypes.shadow_3]}
          paddingBottom={paddingBottom}>
          <Button label={!isFinished ? 'Finish Event' : 'Download Bill'} />
        </View>
      )}
    </View>
  );
};

export default HotelEventDetailScreen;
