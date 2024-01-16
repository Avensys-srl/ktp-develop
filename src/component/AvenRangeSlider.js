import React, { useState, useEffect } from "react";

import {
	Pressable,
	View,
	Animated,
	SafeAreaView,
	StyleSheet, Text, Image, TouchableOpacity 
} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import { LightTheme } from '../styles/themes';
import { ImageSource } from '../common/imageSource';
import {Colors, Sizing} from '../styles';

const AvenRangeSlider = (props) => {

	const [isEnabled, setIsEnabled] = useState(false);
	const [valueLow, setValueLow] = useState(props.minValue + 10);
	const [valueHigh, setValueHigh] = useState(props.maxValue - 10);
	const title = props.title;
	const minValue = props.minValue;
	const maxValue = props.maxValue;
	const [imgUrl, setImgUrl]  = useState('./assets/unlocked.png');
	

	const [componentWidth, setComponentWidth] = useState(0);
	const [rangeWidth, setRangeWidth] = useState(0);
	const [unit, setUnit] = useState(0);

	const onLayoutHandler = ( event ) => {
		const { width } = event.nativeEvent.layout;
   		setComponentWidth(width);
   		setRangeWidth(valueHigh - valueLow);   		
   		setUnit(Math.ceil(width / (maxValue - minValue)) - 0.5 );
   		console.log("component width = ", width);
   		console.log("unit = ", unit);
   		console.log("rangeWidth = ", rangeWidth);
	}


	const showLock = props.readOnly ? 0 : 1;
	const [locked, setLocked] = useState(false);
	const changeImg = () => {
		console.log("change image");
		setLocked(!locked);
	}

	return (
		<View style={styles.container}>
			<View style={styles.sliderContainer} onLayout={ onLayoutHandler }>
					<View style={styles.topTitle}>
			            <Text style={styles.lglabel}>{title}</Text>		
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
			        <View style={styles.lockContainer}>
				   		<Slider
				   		    step={1}

				   		    minimumValue={minValue}
				   		    maximumValue={maxValue}
				   			value={[valueLow, valueHigh]}

				   			onValueChange={ arr => {  setValueHigh(arr[1]); setValueLow(arr[0]); 
				   				console.log("unit = ", unit);
				   				console.log("valueLow = ", arr[0])
				   				console.log("value low = ", valueLow * unit) } }
				   			thumbStyle = {{
				                        width: 20,
				                        height: 18,
				                        overflow: 'hidden',
				                        borderTopLeftRadius: 10,
				                        borderTopRightRadius: 10,
				                        borderBottomLeftRadius: 10,
				                        borderBottomRightRadius: 10,
				                        backgroundColor: '#92D050' ,
				                        marginLeft:1,
				                        marginRight:5
				   			}}
				   			trackStyle={{
				   				// height: 25,
				   				backgroundColor: 'transparent' ,
				   			}}
				   			minimumTrackStyle={{
				   				
				   				borderWidth: 2,
				   				
		                        backgroundColor: '#92D050' ,
				   			}}
				   			containerStyle={{
				   				height: 25,
				   				width:Sizing.screenWidth > 430 ? 430  - 30 - 8 : Sizing.vw * 90 - 30 - 8 ,
				   				borderWidth: 2,
				   				borderTopLeftRadius: 10,
		                        borderTopRightRadius: 10,
		                        borderBottomLeftRadius: 10,
		                        borderBottomRightRadius: 10,
				   				borderColor: "#92D050",
				   			}}
				   			minimumTrackStyle={{
				   				height: 18,
				   				backgroundColor: "#92D050",
				   			}}
				   			maximumTrackStyle={{
				   				// backgroundColor: "#92D050",
				   			}}
				   			disabled = { locked }
				   		/>
				   		
				   	</View>
			   		<View style={[styles.middleTitle]}>
		            	<Text style={[styles.middlesmlabel, {left: Math.ceil(valueLow * unit)}]}>{ valueLow }</Text>
		            	<Text style={[styles.middlesmlabel, {left: Math.ceil(valueHigh * unit)}]}>{ valueHigh }</Text>
		        	</View>
			        <View style={styles.bottomTitle}>
		            	<Text style={styles.smlabel}>{ minValue }</Text><Text style={styles.smlabel}>{ maxValue }</Text>
		        	</View>
			</View>
		
		</View>
	);
};

const styles = StyleSheet.create({
	

    container:{
    	flexDirection: 'row',
    	backgroundColor: '#fff',
    	// borderWidth: 1,

    },
    sliderContainer:{
    	flex:0.9,
    	// borderWidth: 1,
    	// backgroundColor: 'blue'
    },
    lockContainer: {
    	flexDirection: 'row',
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
    	width:Sizing.screenWidth > 430 ? 430  - 30 - 8 : Sizing.vw * 90 - 30 - 8 ,
    	selfAlign: "center",
    	paddingTop: 0, marginTop: 0,
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
    	marginRight: -38
    },
    middleTitle: {
    	flexDirection: "row",
    	// justifyContent: "space-around",
    },
    middlesmlabel:{
    	fontSize: 12,
    	color: LightTheme.textColor,
    	
    	// prosition: "relative"
    },
    middlelglabel:{
    	fontSize: 12,
    },
    lglabel:{
    	fontSize: 18,
    	color: LightTheme.textColor
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

export default AvenRangeSlider;