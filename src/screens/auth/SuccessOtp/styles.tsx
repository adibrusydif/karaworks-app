import { StyleSheet } from 'react-native';
import { scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  imgSuccessOtp: {
    width: scale(180),
    height: scale(180),
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default styles;
