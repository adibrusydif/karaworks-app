import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, EventCard, Text } from '@components';
import { Colors } from '@constants';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { getEvents } from '@store/slice/event/eventListSlice';
import { Event } from '@type/models/event';
import { HotelStackParamList } from '@type/navigation';
import styles from './styles';

type NavProps = NavigationProp<HotelStackParamList>;

const TabListEvent = () => {
  const navigation = useNavigation<NavProps>();
  const { data, isLoading } = useAppSelector((state) => state.events);

  const dispatch = useAppDispatch();

  const renderItem = ({ item }: { item: Event }) => (
    <EventCard
      event={item}
      showSalary={false}
      onPress={() => navigation.navigate('HotelEventDetail')}
    />
  );

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
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.event_id}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={renderEmptyList}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onRefresh={() => dispatch(getEvents())}
        refreshing={isLoading}
      />
    </View>
  );
};

export default TabListEvent;
