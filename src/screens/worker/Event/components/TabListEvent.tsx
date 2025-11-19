import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, EventCard } from '@components';
import { WorkerStackParamList } from '@type/navigation';
import styles from './styles';

type NavProps = NavigationProp<WorkerStackParamList>;

const TabListEvent = () => {
  const navigation = useNavigation<NavProps>();

  const renderItem = () => (
    <EventCard onPress={() => navigation.navigate('WorkerEventDetail')} />
  );

  return (
    <View>
      <FlatList
        data={[0, 1, 2]}
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
