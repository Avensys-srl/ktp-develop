import React, { useState, useEffect } from "react";

import {
	Pressable,
	View,
	Animated,
	SafeAreaView,
	StyleSheet, Text, TouchableHighlight, Image
} from 'react-native';
import Slider from 'react-native-custom-slider';
import { ImageSource } from '../common/imageSource';
import { LightTheme } from '../styles/themes';

const AvenSlider = (props) => {

	const [isEnabled, setIsEnabled] = useState(false);
	const [value, setValue] = useState(30);
	const title = props.title;
	const minValue = props.minValue;
	const maxValue = props.maxValue;
	const readOnly = props.readOnly;
	// let value = (minValue + maxValue) / 2;

	const unit = props.unit;
	console.log("minValue = ", minValue);
	const locking = props.locking ? true : false;

	//locked image processing
	const [locked, setLocked] = useState(true);
	// const [imgUrl, setImgUrl]  = useState('./assets/unlocked.png');
	const changeImg = () => {
		console.log("change image");
		setLocked(!locked);
		// if(locked) {
		// 	setImgUrl('./assets/locked.png');
		// }else{
		// 	setImgUrl('./assets/unlocked.png');
		// }
	}

	const setSliderValue = ( val ) => {
		// if(readOnly) return;

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
			<View style={styles.sliderContainer}>
					<View style={styles.topTitle}>
			            <Text style={styles.lglabel}>{title}{value}{unit}</Text>			      
			        </View>
			    	<Slider
			            value={value}
			            disabled={true}
			            step={1}
			            minimumValue={minValue}
			            maximumValue={maxValue}
			            onValueChange={(value) => setSliderValue(value)}
			            style={{
			            	height:25, 
			            	borderWidth: 2, 
			            	borderColor:"#92D050",
			            	borderTopLeftRadius: 10,
	                        borderTopRightRadius: 10,
	                        borderBottomLeftRadius: 10,
	                        borderBottomRightRadius: 10,
	                        backgroundColor: "#fff"
			        	}}

			        	minimumTrackTintColor="transparent" 
			        	trackStyle={{ backgroundColor: "#fff"}}
			            thumbStyle={{ justifyContent: 'center', alignItems: 'center' }}
			           
			            customThumb={
			                <View
			                    style={{
			                        width: 20,
			                        height: 20,
			                        overflow: 'hidden',
			                        borderTopLeftRadius: 10,
			                        borderTopRightRadius: 10,
			                        borderBottomLeftRadius: 10,
			                        borderBottomRightRadius: 10,
			                        backgroundColor: '#92D050' ,
			                        marginLeft:15,
			                        // marginRight:5
			                    }}
			                />
			            }
			            disabled={!locked}
			        />
			        <View style={styles.bottomTitle}>
		            	<Text style={styles.smlabel}>{ minValue }</Text><Text style={styles.smlabel}>{ maxValue }</Text>
		        	</View>
			</View>
			{
				locking? <>
					    {
							locked ? 
					    <TouchableHighlight  style={styles.rightTitle} onPress={ () => changeImg() }>
				            <Image
				            	style={styles.image}
			       				source={ImageSource.lockOpen}       				
				            />
				        </TouchableHighlight > : 
				         <TouchableHighlight  style={styles.rightTitle} onPress={ () => changeImg() }>
				            <Image
				            	style={styles.image}
			       				source={ImageSource.lock}       				
				            />
				        </TouchableHighlight >
						}

				</>
				: <></>
			}
		</View>
	);
};

const styles = StyleSheet.create({	

    container:{
    	flexDirection: 'row',
    	backgroundColor: '#fff'

    },
    sliderContainer:{
    	flex:0.9,
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
    	flexDirection:'row',
    	alignItems: 'center',
    	justifyContent: 'center',
    	fontSize: 18,
    	marginLeft: 8,
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