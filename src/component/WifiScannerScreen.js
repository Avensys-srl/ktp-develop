import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
  Modal,
  ToastAndroid,
  Image,
  StyleSheet,
} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { Colors, Sizing } from '../styles';
import { ImageSource } from '../common/imageSource';

const WifiScannerScreen = () => {
  const [wifiList, setWifiList] = useState([]);
  const [password, setPassword] = useState('');
  const [connectingSSID, setConnectingSSID] = useState('');
  const [selectedSSID, setSelectedSSID] = useState('');
  const [isPasswordModalVisible, setPasswordModalVisible] = useState(false);

  const checkWifiPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const wifiPermissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (wifiPermissionResult === PermissionsAndroid.RESULTS.GRANTED) {
          scanWifi();
        } else {
          console.error('Wi-Fi permissions denied.');
        }
      } else {
        const wifiPermissionResult = await check(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );

        if (wifiPermissionResult === RESULTS.GRANTED) {
          scanWifi();
        } else {
          const permissionRequestResult = await request(
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          );

          if (permissionRequestResult === RESULTS.GRANTED) {
            scanWifi();
          } else {
            console.error('Wi-Fi permissions denied.');
          }
        }
      }
    } catch (error) {
      console.error('Error checking Wi-Fi permissions:', error);
    }
  };

  const scanWifi = async () => {
    try {
      const wifiArray = await WifiManager.loadWifiList();
      setWifiList(wifiArray);
    } catch (error) {
      console.error('Error scanning for Wi-Fi:', error);
    }
  };

  const connectToWifi = async (ssid, password) => {
    try {
      if (!validatePassword(password)) {
        console.error('Invalid password');
        return;
      }

      setConnectingSSID(ssid);
      await WifiManager.connectToProtectedSSID(ssid, password, false, true);
      console.log('Connected to Wi-Fi:', ssid);

      setTimeout(() => {
        checkInternetConnectivity(ssid);
      }, 5000);
    } catch (error) {
      console.error('Error connecting to Wi-Fi:', error);
    } finally {
      setConnectingSSID('');
      setSelectedSSID('');
      setPasswordModalVisible(false);
    }
  };

  const checkInternetConnectivity = async ssid => {
    try {
      const response = await fetch('https://www.google.com', {method: 'HEAD'});

      if (response.ok) {
        console.log('Connected to the internet');
        showToast('Wi-Fi connected!');
      } else {
        console.error('No internet connection');
      }
    } catch (error) {
      console.error('Error checking internet connectivity:', error);
    }
  };

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const validatePassword = password => {
    return true;
  };

  useEffect(() => {
    checkWifiPermissions();
    // OpenSettings.openSettings();
  }, []);

  const showPasswordInputModal = ssid => {
    setSelectedSSID(ssid);
    setPasswordModalVisible(true);
  };

  const hidePasswordInputModal = () => {
    setSelectedSSID('');
    setPassword('');
    setPasswordModalVisible(false);
  };

  const getDistanceFromSignalStrength = level => {
    const maxDistance = 100;

    const minDistance = 1;

    const normalizedSignalStrength = Math.min(Math.max(level / -50, 0), 1);

    const distance =
      minDistance + normalizedSignalStrength * (maxDistance - minDistance);

    return distance.toFixed(2);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => showPasswordInputModal(item.SSID)}
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.DARK_GREY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={styles.wifiNames}>{`${item.SSID}`}</Text>
        {/* <Text>{`BSSID: ${item.BSSID}`}</Text> */}
        <Text>{`Distance: ${getDistanceFromSignalStrength(
          item.level,
        )} meters`}</Text>
      </View>
      <Image
        source={getImageSource(getSignalStrengthCategory(item.level))}
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
  );

  const getSignalStrengthCategory = level => {
    if (level >= -50) {
      return 'full';
    } else if (level >= -70) {
      return 'medium';
    } else {
      return 'poor';
    }
  };

  const getImageSource = category => {
    switch (category) {
      case 'full':
        return ImageSource.wifiHigh;
      case 'medium':
        return ImageSource.wifiMedium;
      case 'poor':
        return ImageSource.wifiLow;
      default:
        return ImageSource.wifiNone;
    }
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
        data={wifiList}
        keyExtractor={item => item.BSSID}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No Wi-Fi networks found</Text>}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={isPasswordModalVisible}
        onRequestClose={hidePasswordInputModal}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalContent}>
            <Text
              style={
                styles.modalHeader
              }>{`Enter the password for ${selectedSSID}`}</Text>
            <TextInput
              style={styles.passwordTextInput}
              placeholder="Wi-Fi Password"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <View style={styles.okCancelContainer}>
              <TouchableOpacity
                style={styles.okButton}
                onPress={() => connectToWifi(selectedSSID, password)}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={hidePasswordInputModal}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: Colors.BLACK,
    textAlign: 'center',
    marginBottom: 12,
  },
  wifiNames: {
    color: Colors.DARK_GREY,
    fontSize: 20,
  },
  modalContent: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  modalHeader: {
    color: Colors.RED,
    marginBottom: 12,
  },
  passwordTextInput: {
    height: Sizing.vh*7,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 12,
  },
  okCancelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: Sizing.vw*75,
  },
  okButton: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 18,
    marginVertical: 5,
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 18,
    marginVertical: 5,
  },
  buttonText: {
    color: Colors.BLACK,
    textAlign: 'center',
  },
});

export default WifiScannerScreen;
