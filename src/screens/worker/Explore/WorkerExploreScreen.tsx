import React from 'react';
import { FlatList, Image, StatusBar } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Icons, Images } from '@assets';
import { View, Text, Button, EventCard, HeaderHome } from '@components';
import { useInset } from '@hooks';
import { WorkerStackParamList, WorkerTabParamList } from '@type/navigation';
import { scale } from '@utils';
import styles from './styles';

type Props = CompositeScreenProps<
  BottomTabScreenProps<WorkerTabParamList, 'WorkerExplore'>,
  StackScreenProps<WorkerStackParamList>
>;

const WorkerExploreScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingTop } = useInset();

  const renderItem = () => {
    return (
      <EventCard onPress={() => navigation.navigate('WorkerEventDetail')} />
    );
  };

  return (
    <View flex={1} padding={16} paddingTop={paddingTop}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <HeaderHome name="Fikri Sulaiman" onPressNotification={() => {}} />

      <View flex={1} gap={16}>
        <View style={styles.walletContainer}>
          <View gap={4}>
            <View row alignItems="center" gap={4}>
              <Icons.IcWallet width={scale(12)} height={scale(12)} />
              <Text type="captionRegular" color="NEUTRAL_50">
                My Wallet
              </Text>
            </View>
            <Text type="subtitle2SemiBold">Rp500.000</Text>
          </View>
          <Button
            label="Withdraw"
            typeText="captionSemiBold"
            width={scale(72)}
            height={scale(32)}
            onPress={() => navigation.navigate('WorkerWallet')}
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
