import React, { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from 'expo-camera';
import { Button, Text, View } from '@components';
import { shadowTypes } from '@constants';
import { useInset } from '@hooks';
import { ScanResult } from '@type/models/event';
import { WorkerStackParamList } from '@type/navigation';
import { isInsideWindow } from '@utils';
import HeaderQR from './components/Header';
import NoGranted from './components/NoGranted';
import SuccessQR from './components/SuccessQR';
import styles from './styles';

type Props = StackScreenProps<WorkerStackParamList, 'WorkerQRScanner'>;

const WorkerQRScannerScreen: React.FC<Props> = ({ navigation }) => {
  const { paddingTop, paddingBottom } = useInset();

  const [permission, requestPermission] = useCameraPermissions();

  const [dataScan, setDataScan] = useState<ScanResult | null>(null);

  const isPermissionGranted = Boolean(permission?.granted);
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    requestPermission();

    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
      qrLock.current = false;
    };
  }, []);

  const onBarcodeScanned = (result: BarcodeScanningResult) => {
    if (result.data && !qrLock.current && isInsideWindow(result)) {
      qrLock.current = true;
      setTimeout(async () => {
        try {
          setDataScan(JSON.parse(result.data));
        } catch {
          setDataScan(null);
        }
      }, 500);
    }
  };

  if (!isPermissionGranted) {
    return <NoGranted requestPermission={requestPermission} />;
  }

  if (dataScan) {
    return <SuccessQR onPress={() => navigation.goBack()} />;
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={onBarcodeScanned}
      />

      {/* Custom Overlay */}
      <View style={styles.overlay}>
        <View style={styles.overlayTop} paddingTop={paddingTop}>
          <HeaderQR onBack={() => navigation.goBack()} />
        </View>

        {/* Scanning Window */}
        <View style={styles.overlayMiddle}>
          <View style={styles.overlayLeft} />
          <View
            style={styles.scanningWindow}
            borderColor={dataScan ? 'SUCCESS_MAIN' : 'WHITE'}
          />
          <View style={styles.overlayRight} />
        </View>

        <View style={styles.overlayBottom}>
          {dataScan && (
            <Text type="subtitle2Medium" color="SUCCESS_MAIN">
              Scan QR Success!
            </Text>
          )}
        </View>

        {/* Footer */}
        <View
          style={[styles.footer, shadowTypes.shadow_3]}
          backgroundColor={dataScan ? 'WHITE' : 'OVERLAY'}
          paddingBottom={paddingBottom}>
          {dataScan && (
            <Button label="Continue" disabled={!dataScan} onPress={() => {}} />
          )}
        </View>
      </View>
    </View>
  );
};

export default WorkerQRScannerScreen;
