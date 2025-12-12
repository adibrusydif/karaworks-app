import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { deviceWidth, scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_MAIN,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayTop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    paddingHorizontal: 16,
  },
  overlayMiddle: {
    flexDirection: 'row',
    width: '100%',
  },
  overlayLeft: {
    flex: 1,
    backgroundColor: Colors.OVERLAY,
  },
  scanningWindow: {
    width: 250,
    height: 250,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  overlayRight: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlayBottom: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 20,
    alignItems: 'center',
  },
  closeContainer: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(36 / 2),
    backgroundColor: Colors.OVERLAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    width: scale(36),
    height: scale(36),
  },
  footer: {
    padding: 16,
    width: deviceWidth,
    height: scale(100),
    justifyContent: 'center',
  },
});

export default styles;
