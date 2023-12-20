import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {CountdownProgressBar, Header} from '../../component';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';
<<<<<<< HEAD
import CircleProgressBarSmall from '../../component/CircleProgressBarSmall';
=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b

const {width, height} = Dimensions.get('window');

const Probs = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        canGoBack={true}
        title="Probs setting"
        headerBG={1}
        optionsStar={1}
      />

      <ScrollView>
        <View
          style={{
            flex: 1,
            marginBottom: height * 0.05,
            alignItems: 'center',
            marginTop: 36,
          }}>
          {/* Boost airflow */}
          <View style={styles.progressBarContainer1}>
            <CircleProgressBarSmall
              TSB={'Boost airflow [%]: '}
              TSL={40}
              TSR={100}
              RIV={0.32}
              BG={1}
            />
          </View>

          <View style={styles.thickLine}></View>

          {/* CO2 */}
          <View style={styles.progressBarContainer1}>
            <CircleProgressBarSmall
              TSB={'CO2 threshold [ppm]: '}
              TSL={700}
              TSR={1500}
              RIV={0.32}
              BG={1}
            />
          </View>

          <View style={styles.thinLine}></View>

          {/* VOC */}
          <View style={styles.progressBarContainer1}>
            <CircleProgressBarSmall
              TSB={'VOC threshold [ppm]: '}
              TSL={10}
              TSR={100}
              RIV={0.32}
              BG={1}
            />
          </View>

          <View style={styles.thinLine}></View>

          {/* RH */}
          <View style={styles.progressBarContainer1}>
            <CircleProgressBarSmall
              TSB={'RH threshold [%]: '}
              TSL={10}
              TSR={100}
              RIV={0.32}
              BG={1}
            />
          </View>
        </View>
      </ScrollView>

      <CustomBottomNavigation OC={1} />

      <Text style={styles.service}>service</Text>
    </SafeAreaView>
  );
};

export default Probs;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.RED,
<<<<<<< HEAD
    alignItems: 'center',
=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  },
  remainingDutyText: {
    textAlign: 'center',
    marginTop: height * 0.01,
    fontSize: width * 0.04,
    color: Colors.GREY500,
<<<<<<< HEAD
    marginBottom: 24,
=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  },
  progressBarContainer: {
    height: height * 0.09,
    marginTop: -height * 0.02,
  },
  service: {
    textAlign: 'center',
    color: Colors.RED,
<<<<<<< HEAD
  },
  progressBarContainer1: {
    height: height * 0.09,
    marginTop: -height * 0.02,
    marginBottom: 24,
  },
  thickLine: {
    backgroundColor: Colors.BLACK,
    height: 12,
    width: '100%',
    marginBottom: height * 0.05,
    borderRadius: 12,
    marginTop: height * 0.01,
  },
  thinLine: {
    backgroundColor: Colors.BLACK,
    height: 2,
    width: '100%',
    marginBottom: height * 0.05,
    borderRadius: 12,
=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  },
});
