import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { deviceHeight, deviceWidth, scale } from '@utils';

const styles = StyleSheet.create({
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
  bgUp: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
});

export default styles;
