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
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.PRIMARY_BORDER,
  },
  containerList: {
    flexGrow: 1,
    gap: 8,
  },
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
