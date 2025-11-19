import React from 'react';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Images } from '@assets';
import { View, Text, Button } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { HotelStackParamList } from '@type/navigation';
import styles from './styles';

type Props = StackScreenProps<HotelStackParamList, 'HotelSuccessCreateEvent'>;

const HotelSuccessCreateEventScreen = ({ navigation }: Props) => {
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
            {'Your event has been\nsuccessfully posted! 🚀'}
          </Text>
          <Text center type="body1Regular" color="NEUTRAL_70" lineHeight={21}>
            Now freelancers can discover and join your project — let the
            collaboration begin!
          </Text>
        </View>
      </View>
      <View
        style={[styles.footer, shadowTypes.shadow_3]}
        paddingBottom={paddingBottom}>
        <Button
          label="to My Event"
          onPress={() => navigation.popTo('HotelTabs')}
        />
      </View>
    </View>
  );
};

export default HotelSuccessCreateEventScreen;
