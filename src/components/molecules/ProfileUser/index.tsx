import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { View, Text, Button } from '@components/atoms';
import styles from './styles';

interface ProfileUserProps {
  label?: string;
  image?: ImageSourcePropType;
  name: string;
  contact?: string;
  onEdit?: () => void;
}

const ProfileUser = ({
  label,
  image,
  name,
  contact,
  onEdit,
}: ProfileUserProps) => {
  return (
    <View gap={8}>
      {label && (
        <Text type="body2Regular" color="NEUTRAL_70">
          {label}
        </Text>
      )}
      <View row gap={12} alignItems="center">
        {image && <Image source={image} style={styles.image} />}
        <View flex={1} row alignItems="center" gap={12}>
          <View flex={1} gap={4}>
            <Text type="body1Medium">{name}</Text>
            <Text type="body2Regular" color="NEUTRAL_70">
              {contact ?? '-'}
            </Text>
          </View>
          {onEdit && (
            <Button
              label={'Edit'}
              typeText="buttonSMedium"
              width={48}
              height={34}
              buttonColor="PRIMARY_SURFACE"
              labelColor="PRIMARY_MAIN"
              onPress={onEdit}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProfileUser;
