import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Header,
  TextInput,
  Button,
  InputDropdown,
  ModalLoading,
} from '@components';
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
  const { data, isLoading } = useAppSelector((state) => state.bankList);
  const user = useAppSelector((state) => state.authMe.data);

  const bankList = data.map((item) => ({
    key: item.bank_id,
    label: item.bank_name,
  }));

  const [bankValue, setBankValue] = useState(user?.bank?.bank_id || '');
  const [accNumber, setAccNumber] = useState(user?.bank_account_id || '');
  const [accOwnerName, setAccOwnerName] = useState(
    user?.bank_account_name || '',
  );

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
        <TextInput
          label="Account Number"
          value={accNumber}
          onChangeText={setAccNumber}
        />
        <TextInput
          label="Account Owner Name"
          value={accOwnerName}
          onChangeText={setAccOwnerName}
        />
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button label="Save Changes" onPress={() => navigation.goBack()} />
      </View>

      <ModalLoading visible={isLoading} />
    </View>
  );
};

export default WorkerEditBankScreen;
