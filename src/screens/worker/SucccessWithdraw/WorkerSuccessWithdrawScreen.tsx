import React from 'react';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Images } from '@assets';
import { View, Text, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { WorkerStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerSuccessWithdraw'>;

const WorkerSuccessWithdrawScreen = ({ navigation }: Props) => {
  const { paddingBottom } = useInset();

  return (
    <View flex={1}>
      <View style={styles.container}>
        <Image
          source={Images.successCreateEvent}
          style={styles.imgSuccessOtp}
        />
        <View gap={4}>
          <Text center type="headingS" lineHeight={30}>
            {'Withdrawal Request Approved!'}
          </Text>
          <Text center type="body1Regular" color="NEUTRAL_70" lineHeight={21}>
            Your funds are being processed and will reach your account shortly.
          </Text>
        </View>
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button
          label="Back to Home"
          onPress={() => navigation.popTo('WorkerTabs')}
        />
      </View>
    </View>
  );
};

export default WorkerSuccessWithdrawScreen;
