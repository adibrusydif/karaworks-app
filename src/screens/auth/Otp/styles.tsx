import { StyleSheet } from 'react-native';
import { scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  imgOtp: {
    width: scale(180),
    height: scale(180),
    alignSelf: 'center',
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default styles;
