import { StyleSheet } from 'react-native';
import { Colors } from '@constants';

const styles = StyleSheet.create({
  itemValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 0.5,
    borderColor: Colors.NEUTRAL_30,
    borderRadius: 8,
  },
  statusContainer: {
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
});

export default styles;
