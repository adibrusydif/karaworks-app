import { StyleSheet } from 'react-native';
import { Colors } from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  bankInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.NEUTRAL_20,
    padding: 12,
    gap: 8,
    borderRadius: 12,
  },
});

export default styles;
