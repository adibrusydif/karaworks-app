import React from 'react';
import { Image, Pressable } from 'react-native';
import { Icons } from '@assets';
import { View, Text, Button } from '@components';
import { Application } from '@type/models/application';
import { formatCurrency } from '@utils';
import styles from './styles';
import UserTime from './UserTime';

interface UserItemProps {
  item: Application;
  onApprove?: () => void;
  onRemove?: () => void;
}

const UserItem: React.FC<UserItemProps> = ({ item, onApprove, onRemove }) => {
  const user = item.user;
  const event = item.event;

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
          onPress={onApprove}
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
          onPress={onRemove}
        />
      );
    }

    return null;
  };

  return (
    <View style={styles.userItemContainer}>
      <View row justifyContent="space-between">
        <View row alignItems="center" gap={8}>
          <Image source={{ uri: user.user_photo }} style={styles.userImage} />
          <Text type="body2Medium">{user.user_name}</Text>
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
        <UserTime
          clockIn={item.clock_in_prove}
          clockOut={item.clock_out_prove}
        />
        <Text right type="body2SemiBold">
          {formatCurrency(event.event_salary)}
        </Text>
      </View>
    </View>
  );
};

export default UserItem;
