import React, { useState, useEffect } from "react";

import {
	Pressable,
	View,
	Animated,
	SafeAreaView,
	StyleSheet, Text, Image, TouchableHighlight 
} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import { LightTheme } from '../styles/themes';


const AvenRangeSlider = (props) => {

	const [isEnabled, setIsEnabled] = useState(false);
	const [valueLow, setValueLow] = useState(props.minValue + 10);
	const [valueHigh, setValueHigh] = useState(props.maxValue - 10);
	const title = props.title;
	const minValue = props.minValue;
	const maxValue = props.maxValue;
	const [locked, setLocked] = useState(true);
	const [imgUrl, setImgUrl]  = useState('./assets/unlocked.png');
	const changeImg = () => {
		// console.log("change image");
		setLocked(!locked);
		if(locked) {
			setImgUrl('./assets/locked.png');
		}else{
			setImgUrl('./assets/unlocked.png');
		}
	}
	//const { value, onValueChange } = props;

	const [componentWidth, setComponentWidth] = useState(0);
	const [rangeWidth, setRangeWidth] = useState(0);
	const [unit, setUnit] = useState(0);

	const onLayoutHandler = ( event ) => {
		const { width } = event.nativeEvent.layout;
   		setComponentWidth(width);
   		setRangeWidth(valueHigh - valueLow);   		
   		setUnit(Math.floor(width / (maxValue - minValue)));
   		console.log("component width = ", width);
   		console.log("unit = ", unit);
   		console.log("rangeWidth = ", rangeWidth);
	}

	return (
		<View style={styles.container}>
			<View style={styles.sliderContainer} onLayout={ onLayoutHandler }>
					<View style={styles.topTitle}>
			            <Text style={styles.lglabel}>{title}</Text>			      
			        </View>
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
			   			disabled = {!locked}
			   		/>
			   		<View style={[styles.middleTitle]}>
		            	<Text style={[styles.middlesmlabel, {left: valueLow * unit}]}>{ valueLow }</Text>
		            	<Text style={[styles.middlesmlabel, {left: valueHigh * unit}]}>{ valueHigh }</Text>
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
    topTitle: {
    	fontSize: 18,
    	flexDirection: 'row',
    	 alignItems: 'center',
        justifyContent: 'center',
    	// flex: 0.1,
    	// backgroundColor: 'red',
    },
   
    bottomTitle: {
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