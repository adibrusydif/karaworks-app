import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Icons } from '@assets';
import { View, Text, Header, Button, TabFilter } from '@components';
import { TabItem } from '@type/models/common';
import { WorkerStackParamList } from '@type/navigation';
import { formatCurrency, scale } from '@utils';
import ItemValue from './components/ItemValue';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerWallet'>;

const Tabs = [
  { key: 'income', label: 'Income' },
  { key: 'history', label: 'Withdraw History  ' },
];

const WorkerWalletScreen: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(Tabs[0].key);

  const handleSelectTab = (tab: TabItem) => {
    setActiveTab(tab.key);
  };

  return (
    <View flex={1}>
      <Header label="Wallet" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16} gap={32}>
        <View style={styles.walletContainer}>
          <View row alignItems="center" gap={8}>
            <Icons.IcWallet />
            <View gap={4}>
              <Text type="captionRegular" color="NEUTRAL_50">
                My Wallet
              </Text>
              <Text type="headingS">Rp500.000</Text>
            </View>
          </View>
          <Button
            label="Withdraw"
            typeText="captionSemiBold"
            width={scale(72)}
            height={scale(32)}
            onPress={() => navigation.navigate('WorkerWithdraw')}
          />
        </View>

        <TabFilter data={Tabs} onTabPress={handleSelectTab} />
        <View gap={8}>
          {[1, 2, 3].map((item) => (
            <ItemValue
              key={item}
              title={`Event - ${item}`}
              value={formatCurrency(500000)}
              isHistory={activeTab === 'history'}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default WorkerWalletScreen;
