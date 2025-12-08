import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, EventCard, Text } from '@components';
import { Colors } from '@constants';
import { Event } from '@type/models/event';
import { HotelStackParamList } from '@type/navigation';
import styles from './styles';

type NavProps = NavigationProp<HotelStackParamList>;

interface Props {
  data: Event[];
  isLoading: boolean;
  onRefresh: () => void;
}

const TabListEvent: React.FC<Props> = ({ data, isLoading, onRefresh }) => {
  const navigation = useNavigation<NavProps>();

  const renderItem = ({ item }: { item: Event }) => (
    <EventCard
      event={item}
      showSalary={false}
      onPress={() => navigation.navigate('HotelEventDetail', { event: item })}
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
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.event_id}
      contentContainerStyle={styles.containerList}
      ListEmptyComponent={renderEmptyList}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      onRefresh={onRefresh}
      refreshing={isLoading}
    />
  );
};

export default TabListEvent;
