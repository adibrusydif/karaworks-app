import { StyleSheet } from 'react-native';
import { scale } from '@utils';

const styles = StyleSheet.create({
  imgProfile: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(100 / 2),
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default styles;
