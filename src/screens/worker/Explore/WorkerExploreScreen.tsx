import React from 'react';
import { FlatList, Image } from 'react-native';
import { Images } from '@assets';
import { View, Text, Button, EventCard, HeaderHome } from '@components';
import { useInset } from '@hooks';
import { scale } from '@utils';
import styles from './styles';

const WorkerExploreScreen = () => {
  const { paddingTop } = useInset();

  const renderItem = () => {
    return <EventCard />;
  };

  return (
    <View flex={1} padding={16} paddingTop={paddingTop}>
      <HeaderHome name="Fikri Sulaiman" onPressNotification={() => {}} />

      <View flex={1} gap={16}>
        <View style={styles.walletContainer}>
          <View gap={4}>
            <Text type="captionRegular" color="NEUTRAL_50">
              My Wallet
            </Text>
            <Text type="subtitle2SemiBold">Rp500.000</Text>
          </View>
          <Button
            label="Withdraw"
            typeText="captionSemiBold"
            width={scale(72)}
            height={scale(32)}
          />
        </View>

        <FlatList
          data={[0, 1, 2]}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.containerList}
        />
      </View>

      <Image source={Images.bgUp} style={styles.bgUp} />
    </View>
  );
};

export default WorkerExploreScreen;
