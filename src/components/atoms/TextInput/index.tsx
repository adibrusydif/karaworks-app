import React from 'react';
import {
  Pressable,
  TextInputProps,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Colors } from '@constants';
import Text from '../Text';
import View from '../View';
import styles from './styles';

type IconRightProp = React.ReactElement | React.ComponentType<SvgProps>;

interface InputTextProps extends TextInputProps {
  label?: string;
  desc?: string;
  isPassword?: boolean;
  iconRight?: IconRightProp;
  onPress?: () => void;
  onTapIconRight?: () => void;
  disabled?: boolean;
}

type InputTextWithRefProps = InputTextProps & { ref?: React.Ref<TextInputRN> };

const TextInput = ({
  label,
  desc,
  isPassword,
  iconRight,
  onPress,
  onTapIconRight,
  disabled,
  ref,
  ...props
}: InputTextWithRefProps) => {
  const renderIconRight = () => {
    if (!iconRight) {
      return null;
    }

    return React.isValidElement(iconRight)
      ? iconRight
      : React.createElement(iconRight);
  };

  return (
    <View gap={8}>
      {label && (
        <Text type="body2Regular" color="NEUTRAL_70">
          {label}
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.container,
          { backgroundColor: disabled ? Colors.NEUTRAL_20 : Colors.WHITE },
        ]}
        disabled={disabled}
        onPress={onPress}>
        <TextInputRN
          ref={ref}
          style={styles.inputContainer}
          secureTextEntry={isPassword}
          editable={!disabled}
          onPressIn={disabled ? undefined : onPress}
          {...props}
        />
        <Pressable onPress={onTapIconRight}>
          <View style={styles.iconContainer}>{renderIconRight()}</View>
        </Pressable>
      </TouchableOpacity>
      {desc && (
        <Text type="captionSRegular" color="NEUTRAL_70">
          {desc}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
