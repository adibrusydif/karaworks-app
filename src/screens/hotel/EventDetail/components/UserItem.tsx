import React from 'react';
import { Image, Pressable } from 'react-native';
import { Icons, Images } from '@assets';
import { View, Text, Button } from '@components';
import { formatCurrency } from '@utils';
import styles from './styles';
import UserTime from './UserTime';

const UserItem = () => {
  const isApprove = true;
  const isRemove = true;

  const renderButtonAction = () => {
    if (isApprove) {
      return (
        <Button
          label="Approve"
          typeText="captionMedium"
          labelColor="#5898FF"
          buttonColor="#EEF9FF"
          style={styles.actionButton}
          elevation={false}
        />
      );
    }

    if (isRemove) {
      return (
        <Button
          label="Remove"
          typeText="captionMedium"
          labelColor="NEUTRAL_10"
          buttonColor="DANGER_MAIN"
          style={styles.actionButton}
          elevation={false}
        />
      );
    }

    return null;
  };

  return (
    <View style={styles.userItemContainer}>
      <View row justifyContent="space-between">
        <View row alignItems="center" gap={8}>
          <Image source={Images.dummyUser2} style={styles.userImage} />
          <Text type="body2Medium">Ari Kurniawan</Text>
        </View>
        <View row alignItems="center" gap={12}>
          <Pressable style={styles.actionRow}>
            <Icons.IcWhatsapp />
            <Text type="captionMedium" color="SUCCESS_MAIN">
              Chat
            </Text>
          </Pressable>
          {renderButtonAction()}
        </View>
      </View>

      <View row justifyContent="space-between">
        <UserTime />
        <Text right type="body2SemiBold">
          {formatCurrency(100000)}
        </Text>
      </View>
    </View>
  );
};

export default UserItem;
