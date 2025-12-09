import React from 'react';
import { Modal, ModalProps } from 'react-native';
import { Image } from 'expo-image';
import Animated, { StretchInY } from 'react-native-reanimated';
import { Images } from '@assets';
import { Button, Text, View } from '@components/atoms';
import styles from './styles';

interface QRModalProps extends ModalProps {
  title: string;
  onClose: () => void;
}

const QRModal: React.FC<QRModalProps> = ({ title, onClose, ...rest }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      {...rest}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <Animated.View
          entering={StretchInY.springify()}
          style={styles.modalView}>
          <View gap={4}>
            <Text center type="subtitle2Medium" color="SUCCESS_MAIN">
              {title}
            </Text>
            <Text center type="body2Regular" color="NEUTRAL_70">
              Please scan to verify your on-site attendance
            </Text>
          </View>
          <Image
            source={Images.dummyQrCode}
            contentFit="cover"
            style={styles.imageQR}
          />
          <Button
            label="Close"
            labelColor="DANGER_MAIN"
            buttonColor="WHITE"
            borderColor="DANGER_MAIN"
            elevation={false}
            onPress={onClose}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default QRModal;
