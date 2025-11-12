import { scale } from '@utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useInset = () => {
  const insets = useSafeAreaInsets();

  return {
    top: insets.top,
    bottom: insets.bottom,
    left: insets.left,
    right: insets.right,
    paddingBottom: insets.bottom ? insets.bottom : scale(16),
  };
};

export default useInset;
