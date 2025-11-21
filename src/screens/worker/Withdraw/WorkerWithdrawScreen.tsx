import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Header, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { WorkerStackParamList } from '@type/navigation';
import { formatCurrency } from '@utils';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerWithdraw'>;

const WorkerWithdrawScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();

  return (
    <View flex={1}>
      <Header label="Withdraw" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16} gap={16}>
        <View style={styles.container}>
          <View style={styles.totalContainer}>
            <View row justifyContent="space-between">
              <Text type="captionRegular" color="NEUTRAL_70">
                Total Wallet
              </Text>
              <Text type="body1SemiBold">{formatCurrency(500000)}</Text>
            </View>
          </View>

          <View gap={8}>
            <View row justifyContent="space-between">
              <Text type="body2Regular" color="NEUTRAL_70">
                Platform Fee 5%
              </Text>
              <Text type="body2SemiBold">- Rp25.000</Text>
            </View>
            <View row justifyContent="space-between">
              <Text type="body2Regular" color="NEUTRAL_70">
                Transfer Fee
              </Text>
              <Text type="body2SemiBold">- Rp2.500</Text>
            </View>
          </View>

          <View style={styles.totalContainer}>
            <Text type="captionRegular" color="NEUTRAL_70">
              Total Withdrawal Amount
            </Text>
            <Text type="subtitle2SemiBold">{formatCurrency(472500)}</Text>
          </View>

          <View>
            <Text type="body2Regular" color="NEUTRAL_70">
              akan di transfer ke rekening a.n.{' '}
              <Text type="body2SemiBold">FIKRI SULAIMAN</Text>
            </Text>
            <Text type="body2Regular" color="NEUTRAL_70">
              dengan nomor rekening{' '}
              <Text type="body2SemiBold">12354145123</Text>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button
          label="Request Withdraw"
          onPress={() => navigation.navigate('WorkerSuccessWithdraw')}
        />
      </View>
    </View>
  );
};

export default WorkerWithdrawScreen;
