import React from 'react';
import { FlatList } from 'react-native';
import { View, EventCard } from '@components';
import styles from './styles';

const TabListEvent = () => {
  const renderItem = () => <EventCard />;

  return (
    <View>
      <FlatList
        data={[0, 1, 3]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.containerlist}
        initialNumToRender={10}
      />
    </View>
  );
};

export default TabListEvent;
