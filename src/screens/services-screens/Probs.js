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

const {width, height} = Dimensions.get('window');

const Probs = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header canGoBack={true} title="Probs setting" />

      <ScrollView>
        <View style={{marginBottom: height * 0.05}}>
          <Text style={styles.remainingDutyText}>Boost airflow [%]</Text>

          <View style={styles.progressBarContainer}>
            <CountdownProgressBar
              label={''}
              min_val={40}
              max_val={100}
              init_val={0.5}
            />
          </View>
        </View>

        <View style={{marginBottom: height * 0.05}}>
          <Text style={styles.remainingDutyText}>CO₂ threshold [ppm]</Text>

          <View style={styles.progressBarContainer}>
            <CountdownProgressBar
              label={''}
              min_val={700}
              max_val={1500}
              init_val={0.8}
            />
          </View>
        </View>

        <View style={{marginBottom: height * 0.05}}>
          <Text style={styles.remainingDutyText}>VOC threshold [ppm]</Text>

          <View style={styles.progressBarContainer}>
            <CountdownProgressBar
              label={''}
              min_val={10}
              max_val={100}
              init_val={0.5}
            />
          </View>
        </View>

        <View style={{marginBottom: height * 0.05}}>
          <Text style={styles.remainingDutyText}>RH threshold [%]</Text>

          <View style={styles.progressBarContainer}>
            <CountdownProgressBar
              label={''}
              min_val={10}
              max_val={100}
              init_val={0.5}
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
  },
  remainingDutyText: {
    textAlign: 'center',
    marginTop: height * 0.01,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },
  progressBarContainer: {
    height: height * 0.09,
    marginTop: -height * 0.02,
  },
  service: {
    textAlign: 'center',
    color: Colors.RED,
  },
});
