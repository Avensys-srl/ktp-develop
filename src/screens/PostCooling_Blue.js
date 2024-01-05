import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {CircleProgressBar, Header, OnOff} from '../../component';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';

const {width, height} = Dimensions.get('window');

const PostCooling_Blue = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header canGoBack={true} title="Postcooling setting" />
      <View>
        <View style={styles.filterAlarmContainer}>
          <View>
            <OnOff />
          </View>
          <Text style={styles.filterAlarmText}>I/CWD activation</Text>
        </View>

        <View style={styles.circleProgressContainer}>
          <Text style={styles.txt}>Reference temperature</Text>
          <CircleProgressBar
            // TSB={'Ref. outdoor  temperature'}
            TSL={10}
            TSR={35}
            RIV={0.2}
            BG={1}
          />
        </View>

        <View style={styles.circleProgressContainer}>
          <Text style={styles.txt}>booster time [min] </Text>
          <CircleProgressBar
            // TSB={'Ref. outdoor  temperature'}
            TSL={10}
            TSR={35}
            RIV={0.2}
            BG={1}
          />
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <CustomBottomNavigation />
      </View>
      <Text style={styles.bottomText}>user</Text>
    </SafeAreaView>
  );
};

export default PostCooling_Blue;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.BLUE,
  },
  filterAlarmContainer: {
    margin: width * 0.04,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
  },
  filterAlarmText: {
    textAlign: 'center',
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    color: Colors.GREY500,
  },
  txt: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: height * 0.01,
    color: Colors.GREY500,
  },
  circleProgressContainer: {
    marginBottom: height * 0.04,
  },
  navigationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomText: {
    textAlign: 'center',
  },
});
