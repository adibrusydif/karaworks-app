import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
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
  noGrantedContainer: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  imgSuccess: {
    width: scale(180),
    height: scale(180),
  },
});

export default styles;
