import React from 'react';
import { View, Text } from '@components';
import styles from './styles';

interface ItemValueProps {
  title: string;
  value: string;
  isHistory?: boolean;
}

const ItemValue: React.FC<ItemValueProps> = ({ title, value, isHistory }) => {
  return (
    <View style={styles.itemValueContainer}>
      <View gap={16}>
        <Text type="body2Medium" color="NEUTRAL_70">
          {title}
        </Text>
        {isHistory && (
          <View
            style={styles.statusContainer}
            backgroundColor="WARNING_SURFACE"
            borderColor="WARNING_BORDER">
            <Text type="captionSSemiBold" color="WARNING_MAIN">
              On Progress
            </Text>
          </View>
        )}
      </View>
      <Text type="body1SemiBold">{value}</Text>
    </View>
  );
};

export default ItemValue;
