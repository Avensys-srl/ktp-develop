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

const AvenSlider = (props) => {

	const [isEnabled, setIsEnabled] = useState(false);
	const [value, setValue] = useState(props.value);
	const title = props.title;
	const minValue = Number(props.minValue);
	const maxValue = Number(props.maxValue);
	const readOnly = props.readOnly;
	// let value = (minValue + maxValue) / 2;

	const unit = props.unit;
	// console.log("minValue = ", minValue);
	const showLock = props.readOnly ? 0 : 1;

	//locked image processing
	const [locked, setLocked] = useState(readOnly? true: false);
	// const [imgUrl, setImgUrl]  = useState('./assets/unlocked.png');
	const changeImg = () => {
		console.log("change image");
		setLocked(!locked);
	}

	const setSliderValue = ( val ) => {
		console.log("slider value = ", val);
		if(locked) return;

		if( val < minValue){
			setValue(minValue);
		} else if(val > maxValue){
			setValue(maxValue);
		} else {
			setValue(val);
		}
		
		
	}

	return (
		<View style={styles.container}>
			<View style={styles.topTitle}>
	            <Text style={styles.lglabel}>{title}{value}{unit}</Text>	
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
			<View style={styles.sliderContainer}>
			    <View>    
			    	<Slider
			            value={value}
			            disabled={locked}
			            step={1}
			            minimumValue={minValue}
			            maximumValue={maxValue }
			            onValueChange={(value) => setSliderValue(value)}
			            style={{
			            	height:26, 			            	
			            	width: Sizing.screenWidth > 430 ? 430 - 30 - 8 : Sizing.vw * 90  - 30 - 8 ,
			            	borderWidth: 2, 
			            	borderColor:"#92D050",
			            	borderTopLeftRadius: 15,
	                        borderTopRightRadius: 15,
	                        borderBottomLeftRadius: 15,
	                        borderBottomRightRadius: 15,
	                        backgroundColor: "#fff",
	                        // paddingRight: 15,
	                        // paddingLeft: 15
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
			            	backgroundColor: readOnly ? '#fff' : '#92D050' , 
			            	borderWidth: readOnly ? 2 : 0,
			            	borderColor:  '#92D050' , 
			            	width: 20,
	                        height: 20,
	                        overflow: 'hidden',
			        	}}
			           
			            customThumb={
			                <View
			                    style={{
			                        backgroundColor: '#92D050' , 
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
			        <View style={styles.bottomTitle}>
		            	<Text style={styles.smlabel}>{ minValue }</Text><Text style={styles.smlabel}>{ maxValue }</Text>
		        	</View>
		        </View>
				
			</View>
		</View>
	);
};

const styles = StyleSheet.create({	

    container:{
    	backgroundColor: '#fff',
    	// borderWidth: 1,

    },
    sliderContainer:{
    	// borderWidth:1,
    	flexDirection: 'row',
    	// flex:0.9,
    	// backgroundColor: 'blue'
    },
    topTitle: {
    	fontSize: 18,
    	flexDirection: 'row',
    	 alignItems: 'center',
        justifyContent: 'center',
    	// flex: 0.1,
    	// backgroundColor: 'red',
    },
   
    bottomTitle: {
    	flexDirection: 'row',
    	 alignItems: 'center',
        justifyContent: 'space-between',
    	// flex: 0.1,
    	// backgroundColor: 'red',
    },
    rightTitle:{
    	fontSize: 18,
    	marginLeft: 8,
    	maringRight: -38
    },
    lglabel:{
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
    }

});

export default AvenSlider;