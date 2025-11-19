import React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, EventCard } from '@components';
import { HotelStackParamList } from '@type/navigation';
import styles from './styles';

type NavProps = NavigationProp<HotelStackParamList>;

const TabListEvent = () => {
  const navigation = useNavigation<NavProps>();

  const renderItem = () => (
    <EventCard onPress={() => navigation.navigate('HotelEventDetail')} />
  );

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
