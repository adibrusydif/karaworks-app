import React from 'react';
import { ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Header, Text, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { TabItem } from '@type/models/common';
import { HotelStackParamList } from '@type/navigation';
import EventInfo from './components/EventInfo';
import TabFilter from './components/TabFilter';
import UserItem from './components/UserItem';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'HotelEventDetail'>;

const TAB_FILTER: TabItem[] = [
  { key: 'applicants', label: 'Applicants' },
  { key: 'selected', label: 'Selected' },
];

const HotelEventDetailScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();

  const showButtonQR = true;

  return (
    <View flex={1}>
      <Header label="Event Detail" onBack={() => navigation.goBack()} />
      <ScrollView>
        <View flex={1} padding={16} gap={16}>
          <EventInfo />
          <View height={1} backgroundColor="NEUTRAL_30" />
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
          <View gap={8}>
            <TabFilter data={TAB_FILTER} onTabPress={() => {}} />
            <Text type="body2Regular" color="NEUTRAL_70">
              5 Applicants
            </Text>
            <UserItem />
            <UserItem />
            <UserItem />
          </View>
        </View>
      </ScrollView>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button label="Finish Event" />
      </View>
    </View>
  );
};

export default HotelEventDetailScreen;
