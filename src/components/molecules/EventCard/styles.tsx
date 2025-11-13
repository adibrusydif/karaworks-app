import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_30,
    gap: 16,
  },
  image: {
    width: scale(80),
    height: scale(80),
    borderRadius: 6,
  },
});
export default styles;
