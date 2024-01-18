import React, { useState, useEffect } from "react";

import {
  Pressable,
  View,
  Animated,
  SafeAreaView,
  StyleSheet, Text, TouchableOpacity, Image
} from 'react-native';
import Slider from 'react-native-slider';
import { ImageSource } from '../common/imageSource';
import { LightTheme } from '../styles/themes';
import {Colors, Sizing} from '../styles';

import componentStyle from '../styles/componentStyle';
const { barContainer ,  progressBarContainer, img} = componentStyle.ImbalancingBar;

const AvenImbalancingSlider = (props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(0);
  const title = props.title;
  const minValue = Number(props.minValue);
  const maxValue = Number(props.maxValue);
  const readOnly = props.readOnly;
  const step = 1;
  // let value = (minValue + maxValue) / 2;

  const unit = props.unit;
  const showLock = props.readOnly ? 0 : 1;
  const [locked, setLocked] = useState(readOnly? true: false);

  // const [imgUrl, setImgUrl]  = useState('./assets/unlocked.png');
  const changeImg = () => {
    console.log("change image");
    setLocked(!locked);
  }

  const setSliderValue = ( val ) => {
    console.log("slider value = ", val);
    // if(readOnly) return;

    if( val < minValue){
      setValue(minValue);
    } else if(val > maxValue){
      setValue(maxValue);
    } else {
      setValue(val);
    }
    
  }

  const handleImagePress = ( step ) => {
      let tarValue = value + step;
      if( tarValue < minValue){
        setValue(minValue);
      } else if( tarValue > maxValue){
        setValue(maxValue);
      } else {
        setValue(tarValue);
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
          <View style={barContainer}>
              <TouchableOpacity onPress={() => handleImagePress(-step)} style={{ height: 56, width: 56 , alignItems: 'center', justifyContent:'center'}}>
                <Image source={ImageSource.home_in} style={img} />
              </TouchableOpacity>
              <View>
                <View style={styles.topTitle}>
                    <Text style={styles.lglabeltitle}>{title}</Text><Text style={styles.lglabel}>{value}{unit}</Text>  
                    {
                      showLock? <>
                            {
                            locked ? 
                            <TouchableOpacity  style={styles.rightTitle} onPress={ () => changeImg() }>
                                  <Image
                                    style={styles.image}
                                    source={ImageSource.lock}               
                                  />
                              </TouchableOpacity > : 
                               <TouchableOpacity  style={styles.rightTitle} onPress={ () => changeImg() }>
                                  <Image
                                    style={styles.image}
                                    source={ImageSource.lockOpen}               
                                  />
                              </TouchableOpacity >
                          }

                      </>
                      : <></>
                    }          
                </View>
                
                <Slider
                    value={value}
                    disabled={locked}
                    step={1}
                    minimumValue={minValue}
                    maximumValue={maxValue}
                    onValueChange={(value) => setSliderValue(value)}
                    style={{
                      height:26, 
                      // width: Sizing.screenWidth > 430 ? 430 - 150 : Sizing.vw * 80 - 150,
                      borderWidth: 2, 
                      borderColor:"#92D050",
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      backgroundColor: "#fff",
                     
                    }}

                    minimumTrackTintColor="transparent" 
                    // maximumTrackTintColor = '#b3b3b3'
                    trackStyle={{ 
                      backgroundColor: "#fff", 
                      // width: '99%' 
                    }}
                    thumbStyle={{ 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginLeft: 2,
                        marginRight: 2,
                        backgroundColor: '#92D050' , 
                        width: 20,
                              height: 20,
                              overflow: 'hidden',
                    }}
                     
                      customThumb={
                          <View
                              style={{
                                  
                                  // borderTopLeftRadius: 10,
                                  // borderTopRightRadius: 10,
                                  // borderBottomLeftRadius: 10,
                                  // borderBottomRightRadius: 10,
                                  // marginLeft:5,
                                  // marginRight:5
                              }}
                          />
                      }
                  />    
              </View>
            <TouchableOpacity onPress={() => handleImagePress(step)}  style={{height: 56, width: 56 , alignItems: 'center', justifyContent:'center'}}>
              <Image source={ImageSource.home_out} style={img} />
            </TouchableOpacity> 
          </View>           
              
              
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({  

    container:{
      // borderWidth: 1,
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    sliderContainer:{
      // borderWidth: 2,
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 80,
      alignSelf: 'center',
      // backgroundColor: 'blue'
    },
    topTitle: {
      fontSize: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width:Sizing.screenWidth > 430 ? 430 - 120 : Sizing.vw * 80 - 120,
      marginBottom: 2,
      // borderWidth: 1,
      // width: Sizing.vw * 30,
      // flex: 0.1,
      // backgroundColor: 'red',
    },
   
    bottomTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 12,
      // borderWidth: 1,
      // flex: 0.1,
      // backgroundColor: 'red',
    },
    bottomImbalance: {
       flexDirection: 'row',
       justifyContent: 'center',
       // borderWidth: 1,
     },

    rightTitle:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      marginLeft: 8,
      // borderWidth: 1,
    },
    lglabel:{
      marginLeft: 8,
      paddingLeft: Sizing.vw * 3,
      paddingRight: Sizing.vw * 3,
      fontSize: 18,
      // width:  Sizing.vw * 15,
      color: LightTheme.textColor,
       borderWidth: 2,
       borderColor: '#92D050',
       borderTopLeftRadius: 15,
       borderTopRightRadius: 15,
       borderBottomRightRadius: 15,
       borderBottomLeftRadius: 15
    },
    lglabeltitle: {
      fontSize: 18,
      color: LightTheme.textColor,
    },
    smlabel:{
      fontSize: 12,
      color: LightTheme.textColor
    },
    image: {
      width: 30,
      height: 30,
      // borderWidth: 1,
    }

});

export default AvenImbalancingSlider;











