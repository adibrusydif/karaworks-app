import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  StatusBar,
} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Icons, Images } from '@assets';
import { View, Text, Button, EventCard, HeaderHome } from '@components';
import { Colors } from '@constants';
import { useInset } from '@hooks';
import { getEvents } from '@store/slice/event/eventListSlice';
import { useAppDispatch, useAppSelector } from '@storehooks';
import { Event } from '@type/models/event';
import { WorkerStackParamList, WorkerTabParamList } from '@type/navigation';
import { scale } from '@utils';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<WorkerTabParamList, 'WorkerExplore'>,
  StackScreenProps<WorkerStackParamList>
>;

const WorkerExploreScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingTop } = useInset();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.events);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const renderItem: ListRenderItem<Event> = ({ item }) => {
    return (
      <EventCard
        event={item}
        showIconSalary={true}
        onPress={() =>
          navigation.navigate('WorkerEventDetail', { event: item })
        }
      />
    );
  };

  const renderEmptyList = () => {
    if (isLoading) {
      return (
        <View style={styles.containerList} justifyContent="center">
          <ActivityIndicator color={Colors.PRIMARY_MAIN} />
        </View>
      );
    }

    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <Text type="subtitle2Regular" color="NEUTRAL_50">
          No events found
        </Text>
      </View>
    );
  };

  return (
    <View flex={1} padding={16} paddingTop={paddingTop}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <HeaderHome
        name={user?.user_name || '-'}
        onPressNotification={() => {}}
      />

      <View flex={1} gap={16}>
        <View style={styles.walletContainer}>
          <View gap={4}>
            <View row alignItems="center" gap={4}>
              <Icons.IcWallet width={scale(12)} height={scale(12)} />
              <Text type="captionRegular" color="NEUTRAL_50">
                My Wallet
              </Text>
            </View>
            <Text type="subtitle2SemiBold">Rp500.000</Text>
          </View>
          <Button
            label="Withdraw"
            typeText="captionSemiBold"
            width={scale(72)}
            height={scale(32)}
            onPress={() => navigation.navigate('WorkerWallet')}
          />
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.event_id}
          contentContainerStyle={styles.containerList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyList}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          onRefresh={() => dispatch(getEvents())}
          refreshing={isLoading}
        />
      </View>

      <Image source={Images.bgUp} style={styles.bgUp} />
    </View>
  );
};

export default WorkerExploreScreen;
