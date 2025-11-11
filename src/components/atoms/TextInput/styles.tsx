import { StyleSheet } from 'react-native';
import { scale } from '@utils';
import { Colors, fontTypes } from '@constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: scale(8),
    borderColor: Colors.NEUTRAL_40,
    paddingVertical: 0,
  },
  inputContainer: {
    flex: 1,
    ...fontTypes.body2Regular,
    color: Colors.PRIMARY_MAIN,
    paddingVertical: scale(8),
  },
  iconContainer: {
    padding: scale(8),
    paddingLeft: scale(16),
  },
});

export default styles;
