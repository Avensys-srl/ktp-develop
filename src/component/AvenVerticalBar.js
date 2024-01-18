
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';
const {
  container,
  buttonContainer,
  button,
  percentageText,
  txtlbl,
  borderVen,
  smallImg,
  largeImg,
} = componentStyle.VerticalProgressBar;
const {componentTitle} = componentStyle.commonStyles;

import {ImageSource} from '../common/imageSource';

const cus_height = Math.floor(Sizing.vw * 50);
const cus_width = Sizing.screenWidth > 430 ? 100 : Math.floor( (Sizing.vw * 85) / 5 );
const barWidth = Math.floor( cus_width / 3 );
const barHeight = Math.floor( cus_height / 2 );


const AvenVerticalBar = ( { VS, TS, Visible = true , Probes}) => {

  // Ensure that progress is a number between 0 and 1
  const [progress, setProgress] = useState(VS);
  const step = 10;

  const increaseProgress = () => {
    if((progress + step ) > 100 )
    {
       setProgress(100);
       return;
    }
    setProgress(progress + step);
  };

  const decreaseProgress = () => {
    if((progress - step ) < 0 )
    {   setProgress(0); return; }
    setProgress(progress - step);
  };
  if (Visible) {
    return (
      <View style={styles.container}>
          <Text style={[componentTitle, txtlbl]}>{TS}</Text>
          <TouchableOpacity onPress={increaseProgress} style={{marginTop:8, marginBottom:8}}>
            <Image source={ Probes ? ImageSource.arrowUpBlack : ImageSource.fan} style={largeImg} />
          </TouchableOpacity>
          <View style={styles.barout}>
              <View style={styles.barin}>
                <View style={[styles.progress, { height: `${progress}%`}]} />
              </View>
          </View>
          <TouchableOpacity onPress={decreaseProgress} style={{marginTop:8, marginBottom:8}}>
              <Image source={ Probes ? ImageSource.arrowDown : ImageSource.fan } style={smallImg} />
          </TouchableOpacity>
          <Text style={[componentTitle, percentageText]}>{progress}%</Text>
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    width: cus_width, 
    // height: 100,
    backgroundColor: Colors.WHITE,
    borderRadius: 10, 
    overflow: 'hidden', 
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    paddingTop: 8, 
    paddingBottom:8,
  },
  barout: {
    width: barWidth,
    height: barHeight,
    borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  barin: {
    height: '100%',
    width: barWidth - 8,
    // borderWidth: 1,
    borderRadius: 100,
    overflow: "hidden",
  },
  progress: {
    position: 'absolute',
    width: barWidth - 8,
    bottom: 0, // Start from the bottom
    backgroundColor: Colors.LIGHT_GREEN,
    borderRadius: 100,
  },
});

export default AvenVerticalBar;
