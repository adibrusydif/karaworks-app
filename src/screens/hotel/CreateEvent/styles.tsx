import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: 'white',
  },
  photoContainer: {
    width: scale(100),
    height: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_40,
    borderRadius: 8,
    borderStyle: 'dashed',
  },
  photoPreview: {
    width: scale(100),
    height: scale(100),
    borderRadius: 8,
  },
});

export default styles;
