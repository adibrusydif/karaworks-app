import React from 'react';
import { FlatList } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '@components';
import { HotelStackParamList, HotelTabParamList } from '@type/navigation';
import BillCard from './components/BillCard';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HotelTabParamList, 'HotelBill'>,
  StackScreenProps<HotelStackParamList>
>;

const HotelBillScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = () => (
    <BillCard onPressDetail={() => navigation.navigate('HotelBillDetail')} />
  );

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
