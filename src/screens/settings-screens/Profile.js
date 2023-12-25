import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../component';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';

const {width, height} = Dimensions.get('window');

export const Profile = () => {
  const [isLoginSaved, setIsLoginSaved] = useState(false);

  const handleLoginSaved = () => {
    setIsLoginSaved(!isLoginSaved);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* HEADER COMPONENT */}
      <Header canGoBack={true} title="Profile" headerBG={1} optionsStar={1} />

      {/* MAIN SCROLLVIEW COMPONENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScrollView}>
        <View style={styles.opacityContainer}>
          <TouchableOpacity style={styles.btnOpacity}>
            <Text style={styles.opacityText}>digit OTP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.opacityContainer}>
          <TouchableOpacity style={styles.btnOpacity}>
            <Text style={styles.opacityText}>send OTP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.opacityContainer}>
          <TouchableOpacity style={styles.btnOpacity}>
            <Text style={styles.opacityText}>username</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.opacityContainer}>
          <TouchableOpacity style={styles.btnOpacity}>
            <Text style={styles.opacityText}>password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signedContainer}>
          <TouchableOpacity
            style={styles.radioOpacity}
            onPress={handleLoginSaved}>
            {isLoginSaved ? <View style={styles.radioToggle}></View> : null}
          </TouchableOpacity>
          <Text style={styles.signedText}>keep signed</Text>
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <CustomBottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth:2,
    borderColor:Colors.BLACK,
    borderRadius:10,
  },
  opacityContainer: {
    width: Sizing.vw * 100,
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  btnOpacity: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    width: Sizing.vw * 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 12,
  },
  opacityText: {
    fontSize: 20,
    color: Colors.BLACK,
  },
  signedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  radioOpacity: {
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: (width * 0.06) / 2,
    borderWidth: 2,
    borderColor: Colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioToggle: {
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: (width * 0.03) / 2,
    backgroundColor: Colors.RED,
  },
  signedText: {
    fontSize: 24,
    marginStart: width * 0.03,
    color: Colors.BLACK,
  },
});
