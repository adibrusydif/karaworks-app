import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(32 / 2),
    backgroundColor: Colors.PRIMARY_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    backgroundColor: Colors.WHITE,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: Colors.NEUTRAL_20,
    borderBottomWidth: 1,
  },
  tabBar: { width: 'auto' },
});

export default styles;
