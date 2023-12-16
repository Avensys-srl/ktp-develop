import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ImageSource} from '../common/imageSource';

const {width, height} = Dimensions.get('window');
export const CenteredProgressBar = ({IST, RIV, BG}) => {
  const normalizedPercentage = Math.min(Math.max(100 - RIV, 0), 100);

  let bgColor;
  if (BG === 0) {
    bgColor = 'orange';
  } else if (BG === 1) {
    bgColor = '#4CAF50';
  } else if (BG === 2) {
    bgColor = 'red';
  }

  const leftFill = Math.min(100 - normalizedPercentage / 2, 50);
  const rightFill = Math.min(50 - normalizedPercentage / 2, 50);

  return (
    <View style={styles.container}>
      <View style={styles.percentageContainer}>
        <Text style={styles.text}>{RIV} °C</Text>
      </View>
      <View style={styles.progressBarWrapper}>
        <View>
          <Image source={ImageSource.home_in} style={styles.images} />
        </View>
        <View style={[styles.progressBarContainer, {backgroundColor: bgColor}]}>
          <View style={{...styles.fill, width: `${leftFill}%`}} />
          <View style={{flex: 50}} />
          <View style={{...styles.fill, width: `${rightFill}%`}} />
        </View>
        <View>
          <Image source={ImageSource.home_out} style={styles.images} />
        </View>
      </View>
      <View>
        <Text style={{textAlign: 'center'}}>{IST}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '95%',
  },
  percentageContainer: {
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 4,
    width: width * 0.2,
    height: height * 0.06,
    borderRadius: 12,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Set the width to 100%
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    borderRadius: 4,
    overflow: 'hidden',
    flex: 1, // Expand to fill the available space
    borderWidth: 1,
    borderColor: 'black',
  },
  fill: {
    backgroundColor: '#fffffe',
    height: '100%',
  },
  text: {
    textAlign: 'center',
  },

  images: {
    width: 30,
    height: 30,
  },
});

export default CenteredProgressBar;
