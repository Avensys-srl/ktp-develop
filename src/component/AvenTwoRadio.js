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
import { RadioButton } from 'react-native-paper';
import {Colors, Sizing} from '../styles';

const AvenTwoRadio = (props) => {

	const [checked, setChecked] = useState(props.value);
	const { value, onValueChange, on, off ,title, disabled = false} = props;    

	//locked image processing
	const showLock = props.readOnly ? 0 : 1;
	const [locked, setLocked] = useState(false);
	const changeImg = () => {
		console.log("change image");
		setLocked(!locked);
	}

	const setSwitch = ( status ) => {
		if(locked || props.disabled ) return;

		setChecked(status);
		onValueChange(status);
	}

	return (
		<View style={styles.container}>
			<View style={styles.lock_container}>
				<View style={{ alignItems: "center" }}>
					<View style={styles.title_container}>
						<Text style={styles.lglabel}>{title}</Text>				
					</View>
					<View style={ styles.upperradios }>
						
					    <View >
					    	<RadioButton
						        value="first"
						        status={checked === false ? 'checked' : 'unchecked'}
						        onPress={() => setSwitch(false)}
						        uncheckedColor= { Colors.LIGHT_GREEN}
						        color={Colors.LIGHT_GREEN } // Customize the color
						        style={{ flexDirection: 'row', alignItems: 'center', margin:0,padding: 0 }}

						    />
						    <View style={styles.bottomTitle}>
						    <Text style={styles.smlabel}>{off}</Text>
						    </View>
					    </View>
					    <View>
						    <RadioButton
						        value="second"
						        status={checked === true ? 'checked' : 'unchecked'}
						        onPress={() => setSwitch(true)}
						        uncheckedColor= { Colors.LIGHT_GREEN}
						        color={ Colors.LIGHT_GREEN} // Customize the color
						        style={{ borderWidth: 1, }}
						     />
						    <View style={styles.bottomTitle}>
				            	<Text style={styles.smlabel}>{on}</Text>
				            </View>
				        </View>
					</View>
				
				</View>
				<View>

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
			</View>

		</View>
	);
};

const styles = StyleSheet.create({

	 
	
	 upperradios: {
	 	width: 100,

	 	flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1,
	 },
	 bottomTitle: {
	 	// width: 100,
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        // paddingHorizontal: 20,
        // paddingVertical: 10,
        // backgroundColor: '#fff',
    },
    container:{
    	// width: 100,
    	// borderWidth: 1,
    	flexDirection: 'column',
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	alignSelf: 'center',
    },
    rightTitle:{
    	flexDirection:'row',
    	// alignItems: 'center',
    	// justifyContent: 'center',
    	fontSize: 18,
    	marginLeft: 8,
    	marginTop: 2,
    	marginRight: -38
    	// borderWidth: 1,
    },
    image: {
    	width: 30,
    	height: 30,
    },
    lock_container: {
    	flexDirection: 'row',
    	// borderWidth: 1,
    },
    title_container: {
    	alignItems: "center"
    },

    lglabel:{
    	// paddingLeft: 8,
    	fontSize: 18,
    	color: LightTheme.textColor,
    	marginTop: 3,
    	// borderWidth: 1,
    },
    smlabel:{
    	fontSize: 12,
    	color: LightTheme.textColor,
        // marginLeft: 10,
        // marginRight: 10,
        // borderWidth: 1,
    }

});

export default AvenTwoRadio;