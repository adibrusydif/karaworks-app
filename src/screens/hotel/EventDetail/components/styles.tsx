import { StyleSheet } from 'react-native';
import { Colors, fontTypes } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: 'row',
  },
  eventImage: {
    width: scale(120),
    height: scale(120),
    borderRadius: 8,
  },
  descEvent: {
    ...fontTypes.body2Regular,
    color: Colors.NEUTRAL_70,
    lineHeight: 18,
  },

  // Filter Tab
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.NEUTRAL_30,
    backgroundColor: Colors.WHITE,
  },
  tabItem: {
    padding: 12,
    borderBottomWidth: scale(2),
    borderBottomColor: 'transparent',
  },
  tabItemActive: {
    borderBottomColor: Colors.PRIMARY_MAIN,
  },

  // User Item
  userItemContainer: {
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_30,
    borderRadius: 8,
    paddingHorizontal: scale(8),
    paddingVertical: scale(12),
    gap: 8,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 4,
  },
  actionButton: {
    width: scale(58),
    height: scale(32),
  },
  userImage: {
    width: scale(24),
    height: scale(24),
    borderRadius: 24 / 2,
  },
});

export default styles;
