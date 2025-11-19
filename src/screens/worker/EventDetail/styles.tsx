import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  eventImage: {
    width: scale(140),
    height: scale(140),
    borderRadius: 8,
    alignSelf: 'center',
  },
  hotelImage: {
    width: scale(24),
    height: scale(24),
    borderRadius: 24 / 2,
  },
  applicantContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: Colors.NEUTRAL_20,
    borderRadius: 12,
  },
  timeContainer: {
    flexDirection: 'row',
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
