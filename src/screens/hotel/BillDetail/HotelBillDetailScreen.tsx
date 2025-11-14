import React from 'react';
import { FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Header, EventCard, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { HotelStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'HotelBillDetail'>;

const HotelBillDetailScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();

  const renderItem = () => <EventCard />;

  return (
    <View flex={1}>
      <Header label="Bill Detail" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16} gap={12}>
        <Text type="body1SemiBold">November 2025</Text>
        <FlatList
          data={[0, 1, 3]}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.containerlist}
          initialNumToRender={10}
        />
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <View>
          <Text type="captionRegular" color="NEUTRAL_70">
            Total Bill
          </Text>
          <Text type="subtitle2SemiBold">Rp2.000.000</Text>
        </View>
        <Button label="Download Bill" width={164} />
      </View>
    </View>
  );
};

export default HotelBillDetailScreen;
