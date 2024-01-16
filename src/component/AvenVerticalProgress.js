import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  PanResponder,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import {ImageSource} from '../common/imageSource';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';
import Slider from 'react-native-slider';

const {width} = Dimensions.get('window');
export const AvenVerticalProgress = ({VS, TS, Visible = true}) => {
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

  const barWidth = Sizing.vw * 4;

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

  if (Visible) {
    return (
      <SafeAreaView>
        <View style={container}>
          <Text style={[componentTitle, txtlbl]}>{TS}</Text>
          <TouchableOpacity onPress={increaseProgress} style={button}>
            <Image source={ImageSource.fan} style={largeImg} />
          </TouchableOpacity>

          <Slider
              value={progress}
              step={step}
              minimumValue={0}
              maximumValue={100}
              style={{
                borderWidth: 2,
                height: Sizing.vw * 6,
                width: Sizing.vh * 10,
                transform: [{ rotate: '-90deg' }],
                borderColor: Colors.LIGHT_GREEN,
                borderRadius: 15,
                overflow: 'hidden',
                padding: 2,
              }}              

              thumbStyle = {{    
                  width: 0,
                  height: Sizing.vw * 6 - 8,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  backgroundColor: '#92D050' ,
                  marginLeft: 10,
              }}

              trackStyle={{
                   borderRadius: 12,
                   marginLeft: 2,
                   marginRight: -5,
                   height: Sizing.vw * 6 - 8,
                  // backgroundColor: 'black' ,
              }}
              minimumTrackStyle={{   
                  height: Sizing.vw * 6 - 8,  
                  
                  overflow: 'hidden',             
                  borderWidth: 2,                  
                  backgroundColor: Colors.LIGHT_GREEN
              }}
              maximumTrackTintColor = 'transparent'
              minimumTrackTintColor = {Colors.LIGHT_GREEN}
          />
          <TouchableOpacity onPress={decreaseProgress} style={button}>
            <Image source={ImageSource.fan} style={smallImg} />
          </TouchableOpacity>
          <Text style={[componentTitle, percentageText]}>{progress}%</Text>
          <View style={buttonContainer}></View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
        <></>
    );
  }
};

const styles = StyleSheet.create({
   
  
  trackStyle: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },

});

export default AvenVerticalProgress;
