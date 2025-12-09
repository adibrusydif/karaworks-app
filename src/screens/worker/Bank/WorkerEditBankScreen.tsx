import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Header, TextInput, Button, InputDropdown } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { getBankList } from '@store/slice/bank/bankListSlice';
import { WorkerStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerEditBank'>;

const WorkerEditBankScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.bankList);

  const bankList = data.map((item) => ({
    key: item.bank_id,
    label: item.bank_name,
  }));

  const [bankValue, setBankValue] = useState('');

  useEffect(() => {
    dispatch(getBankList());
  }, []);

  return (
    <View flex={1}>
      <Header label="Edit Bank Account" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16} gap={16}>
        <InputDropdown
          label="Bank Name"
          placeholder="Select Bank Name"
          data={bankList}
          value={bankValue}
          onSelect={setBankValue}
        />
        <TextInput label="Account Number" />
        <TextInput label="Account Owner Name" />
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button label="Save Changes" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default WorkerEditBankScreen;
