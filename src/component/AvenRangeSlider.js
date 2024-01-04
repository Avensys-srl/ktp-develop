import React, { useState, useEffect } from "react";

import {
	Pressable,
	View,
	Animated,
	SafeAreaView,
	StyleSheet, Text, Image, TouchableHighlight 
} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';


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
		console.log("change image");
		setLocked(!locked);
		if(locked) {
			setImgUrl('./assets/locked.png');
		}else{
			setImgUrl('./assets/unlocked.png');
		}
	}
	//const { value, onValueChange } = props;

	return (
		<View style={styles.container}>
			<View style={styles.sliderContainer}>
					<View style={styles.topTitle}>
			            <Text style={styles.lglabel}>{title}</Text>			      
			        </View>
			   		<Slider
			   		    step={1}

			   		    minimumValue={minValue}
			   		    maximumValue={maxValue}
			   			value={[valueLow, valueHigh]}

			   			onValueChange={ arr => { console.log(arr);setValueLow(arr[0]); setValueHigh(arr[1]); } }
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
			   		<View style={styles.middleTitle}>
		            	<Text style={styles.middlesmlabel}>{ valueLow }</Text><Text style={styles.middlesmlabel}>{ valueHigh }</Text>
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
    	justifyContent: "space-around",
    },
    middlesmlabel:{
    	fontSize: 12,
    },
    middlelglabel:{
    	fontSize: 12,
    },
    lglabel:{
    	fontSize: 18,
    },
    smlabel:{
    	fontSize: 12
    },
    image: {
    	width: 30,
    	height: 30,
    }

});

export default AvenRangeSlider;