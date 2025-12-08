import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, EventCard } from '@components';
import { useAppSelector } from '@store/hooks';
import { Event } from '@type/models/event';
import { WorkerStackParamList } from '@type/navigation';
import styles from './styles';

type NavProps = NavigationProp<WorkerStackParamList>;

const TabListEvent = () => {
  const navigation = useNavigation<NavProps>();
  const { data } = useAppSelector((state) => state.events);

  const renderItem = ({ item }: { item: Event }) => (
    <EventCard
      event={item}
      onPress={() => navigation.navigate('WorkerEventDetail', { event: item })}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.event_id}
        contentContainerStyle={styles.containerlist}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

export default TabListEvent;
