import { StyleSheet } from 'react-native';
import { Colors } from '@constants';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    gap: 16,
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_30,
  },
  statusContainer: {
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.WARNING_BORDER,
    backgroundColor: Colors.WARNING_SURFACE,
  },
});

export default styles;
