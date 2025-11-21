import { StyleSheet } from 'react-native';
import { Colors } from '@constants';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_30,
    borderRadius: 16,
    gap: 16,
  },
  totalContainer: {
    padding: 12,
    backgroundColor: Colors.NEUTRAL_20,
    borderRadius: 12,
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default styles;
