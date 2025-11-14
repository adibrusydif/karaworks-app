import { StyleSheet } from 'react-native';
import { scale } from '@utils';

const styles = StyleSheet.create({
  image: {
    width: scale(64),
    height: scale(64),
    borderRadius: scale(64 / 2),
  },
});

export default styles;
