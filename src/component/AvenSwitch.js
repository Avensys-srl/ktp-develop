import React, { useState, useEffect } from "react";

import {
	Pressable,
	View,
	Animated,
	SafeAreaView,
	StyleSheet, Text, Appearance,  Image, TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LightTheme} from '../styles/themes';
import { ImageSource } from '../common/imageSource';

const AvenSwitch = (props) => {

	const [isEnabled, setIsEnabled] = useState(false);

	const defaultStyles = {
		bgGradientColors: ['#fff', '#fff'],
		headGradientColors: ['#92D050', '#92D050'],
	};
	const activeStyles = {
		bgGradientColors: ['#fff', '#fff'],
		headGradientColors: ['#92D050', '#92D050'],
	};

	const { value, onValueChange, on, off ,title} = props;
	const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

	useEffect(() => {
		// Update the animated value when the value prop changes
		Animated.timing(animatedValue, {
			toValue: value ? 1 : 0,
			duration: 300, // Adjust the animation duration
			useNativeDriver: false,
		}).start();
	}, [value]);

	const translateX = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [2, 74], //28// Adjust the distance of the switch head
	});

	const toggleSwitch = () => {
		if(locked) return;
		const newValue = !value;
		console.log("toggle switch = ", newValue);
		onValueChange(newValue);
	};

	const currentStyles = value ? activeStyles : defaultStyles;

	const showLock = props.readOnly ? 0 : 1;
	//locked image processing
	const [locked, setLocked] = useState(false);
	const changeImg = () => {
		console.log("change image");
		setLocked(!locked);
	}

	return (
		<View style={styles.container}>
			<View>
			    <Pressable onPress={toggleSwitch} style={styles.pressable}>
			      <LinearGradient
			        colors={currentStyles.bgGradientColors}
			        style={styles.backgroundGradient}
			        start={{
			          x: 0,
			          y: 0.5,
			        }}>
			        <View style={styles.innerContainer}>
			          <Animated.View
			            style={{
			              transform: [{ translateX }],
			            }}>
			            <LinearGradient
			              colors={currentStyles.headGradientColors}
			              style={styles.headGradient}
			            />
			          </Animated.View>
			        </View>
			      </LinearGradient>
			    </Pressable>
			    <View style={styles.bottomTitle}>
		            <Text style={styles.smlabel}>{on}</Text><Text style={styles.smlabel}>{off}</Text>
		        </View>
			</View>
			<View><Text style={styles.lglabel}>{title}</Text></View>
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
	);
};

const styles = StyleSheet.create({
	 pressable: {
	   width: 100,
	   height: 26,
	   borderRadius: 16,
	   borderWidth: 2,
	   borderColor: '#92D050',
	   
	 },
	 backgroundGradient: {
	   borderRadius: 12,
	   flex: 1,
	 },
	 innerContainer: {
	   flexDirection: 'row',
	   alignItems: 'center',
	   flex: 1,
	   position: 'relative',
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
    container:{
    	flexDirection: 'row',
    	backgroundColor: '#fff'

    },
    rightTitle:{
    	flexDirection:'row',
    	// alignItems: 'center',
    	// justifyContent: 'center',
    	fontSize: 18,
    	marginLeft: 8,
    	// borderWidth: 1,
    },
    image: {
    	width: 30,
    	height: 30,
    },

    lglabel:{
    	paddingLeft: 8,
    	fontSize: 18,
    	color: LightTheme.textColor,
    },
    smlabel:{
    	fontSize: 12,
    	color: LightTheme.textColor,
    }

});

export default AvenSwitch;