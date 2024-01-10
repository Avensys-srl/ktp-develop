import React, { useState, useEffect , useRef } from "react";

import {
	Pressable,
	View,
	Animated,
	SafeAreaView,
	StyleSheet, Text, Appearance
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LightTheme} from '../styles/themes';
import {Colors, Sizing} from '../styles';

const AvenTrippleSlider = (props) => {

	const [status, setStatus] = useState(0);

	const defaultStyles = {
		bgGradientColors: ['#fff', '#fff'],
		headGradientColors: ['#92D050', '#92D050'],
	};
	const activeStyles = {
		bgGradientColors: ['#fff', '#fff'],
		headGradientColors: ['#92D050', '#92D050'],
	};

	const { value, onValueChange, on, off} = props;
	const animatedValue = useRef(new Animated.Value(0)).current;

	const translateX = animatedValue.interpolate({
		inputRange: [0, 1, 2],
		outputRange: [2, Sizing.vw * 30, Sizing.vw * 63], //28// Adjust the distance of the switch head
	});

	const toggleSwitch = (toValue) => {
		Animated.spring(animatedValue, {
	      toValue,
	      useNativeDriver: false, // Adjust based on your animation requirements
	    }).start();

		setStatus(toValue);
		onValueChange(toValue);
		console.log("current position of switch = ", toValue);
	};

	const currentStyles = value ? activeStyles : defaultStyles;

	return (
		<View style={styles.mainContainer}>
			<View style={styles.innerContainer}>
				<View style={{ flex: 1, height: 26,flexDirection: "row", justifyContent: "space-between" ,paddingTop:1,borderWidth:2, borderColor:'#92D050',borderRadius:16}}>
				    <Pressable onPress={() => toggleSwitch(0)} style={styles.pressable}>	
		   			<Animated.View
			            style={{
			              transform: [{ translateX }],
			            }}>
			            <LinearGradient
			              colors={currentStyles.headGradientColors}
			              style={styles.headGradient}
			            />
			         </Animated.View>
				    </Pressable>
				    <Pressable onPress={() => toggleSwitch(1)} style={styles.pressable}>			   			
				    </Pressable>
				    <Pressable onPress={() => toggleSwitch(2)} style={styles.pressable}>
				    </Pressable>
				</View>
				<View style={styles.titles}>
					<Text style={styles.smlabel}>auto</Text>
					<Text style={styles.smlabel}>autstby</Text>
					<Text style={styles.smlabel}>manual</Text>
				</View>
			
			</View>
			<View style={styles.lglabel}>
				<Text style={styles.lglabel}>Operation</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({

    mainContainer:{
    	flexDirection: 'row',
    	backgroundColor: '#fff',
    },
    innerContainer: {
    	width: Sizing.vw * 70
	 },
	 pressable: {
	   width: Sizing.vw * 23,
	   height: 26,
	   borderRadius: 16,
	   // borderWidth: 2,
	   borderColor: '#92D050',
	   
	 },
	 titles: {
	 	width: Sizing.vw * 70,
	 	flexDirection: 'row',
	 	alignItems: "center",
	 	justifyContent: "space-between",
	 },
	 backgroundGradient: {
	   borderRadius: 12,
	   flex: 1,
	 },
	 
	 headGradient: {
	   width: 20,
	   height: 20,
	   borderRadius: 100,
	 },
	 bottomTitle: {
	 	width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        // backgroundColor: '#fff',
    },
    rightTitle:{
    	fontSize: 18,
    },
    lglabel:{
    	width: Sizing.vw * 25,
    	fontSize: 18,
    	color: LightTheme.textColor,
    },
    smlabel:{
    	fontSize: 12,
    	color: LightTheme.textColor,
    }

});

export default AvenTrippleSlider;