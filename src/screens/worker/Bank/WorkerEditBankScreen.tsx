import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Icons } from '@assets';
import { View, Header, TextInput, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { WorkerStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerEditBank'>;

const WorkerEditBankScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingBottom } = useInset();

  return (
    <View flex={1}>
      <Header label="Edit Bank Account" onBack={() => navigation.goBack()} />
      <View flex={1} padding={16} gap={16}>
        <TextInput
          label="Bank Name"
          value="BCA"
          iconRight={Icons.IcArrowDown}
          editable={false}
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
