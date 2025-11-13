import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '@components';
import BillCard from './components/BillCard';
import styles from './styles';

const HotelBillScreen = () => {
  const renderItem = () => <BillCard />;

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View padding={16}>
        <Text type="subtitle1Medium">Bill</Text>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.containerlist}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
};

export default HotelBillScreen;
