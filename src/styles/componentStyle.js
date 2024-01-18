import {StyleSheet} from 'react-native';
import {Colors} from '.';
import {Sizing} from '.';

const height = Sizing.vh * 3 * 1.5;
const widthLarge = Sizing.vw * 90;
const widthMedium = Sizing.vw * 80;
const widthSmall = Sizing.vw * 70;

import CustomStyles from './CustomStyles';


const componentStyle = StyleSheet.create({
  // Common style
  commonStyles: {
    componentHeight: {
      height: height,
    },
    componentTitle: {
      textAlign: 'center',
      color: Colors.BLACK,
      fontSize: 18,
      marginBottom: Sizing.vh * 1,
    },
    componentText: {
      textAlign: 'center',
      color: Colors.GREY500,
      fontSize: 18,
    },
    componentWidthLarge: {
      width: Sizing.vw * 90,
    },
    componentWidthMedium: {
      width: Sizing.vw * 80,
    },
    circleContainer: {
      width: Sizing.vh * 2.45 * 1.5,
      height: Sizing.vh * 2.45 * 1.5,
      borderRadius: (Sizing.vh * 2.45 * 1.5) / 2,
      position: 'absolute',
      borderWidth: 2,
      borderColor: Colors.WHITE,
    },
  },

  // Activation button
  avtivationButton: {
    mainContainer: {
      alignItems: 'center',
    },
    titleText: {
      color: Colors.BLACK,
      fontSize: 18,
    },
    svgStyle: {
      width: Sizing.vw * 30,
      height: Sizing.vh * 12,
    },
  },

  // Centered progressbar
  centeredProgressBar: {
    mainContainer: {
      alignItems: 'center',
      width: Sizing.vw * 90,
    },
    percentageContainer: {
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      justifyContent: 'center',
      marginTop: Sizing.vh * 2,
      width: Sizing.vw * 25,
      height: Sizing.vh * 6.5,
      borderRadius: 12,
    },
    progressBarWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: Sizing.vw * 90,
    },
    homeImages: {
      width: 30,
      height: 30,
    },
    progressBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: Sizing.vh * 3,
      borderRadius: 4,
      overflow: 'hidden',
      flex: 1,
      borderWidth: 1,
      borderColor: Colors.BLACK,
      marginTop: Sizing.vh * 1,
      marginBottom: Sizing.vh * 1,
    },
    fill: {
      backgroundColor: Colors.WHITE,
      height: Sizing.vh * 100,
    },
    slider: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      backgroundColor: Colors.BLUE,
      zIndex: -1,
    },
  },

  // circleProgressBarSmall
  circleProgressBarSmall: {
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    valueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    progressBarContainer: {
      width: widthLarge,
      height: height,
      borderRadius: widthLarge / 2,
      borderColor: Colors.LIGHT_GREEN,
      borderWidth: 2,
      backgroundColor: Colors.WHITE,
      position: 'relative',
      justifyContent: 'center',
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },

  circuleProgressBarSmaller: {
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.WHITE,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    progressBarContainer: {
      width: widthMedium,
      height: height,
      borderRadius: widthMedium / 2,
      borderColor: Colors.LIGHT_GREEN,
      borderWidth: 2,
      backgroundColor: Colors.WHITE,
      position: 'relative',
      justifyContent: 'center',
    },
    valueContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },

  // WIFI scanner
  WifiScannerScreen: {
    wifiNames: {
      color: Colors.DARK_GREY,
      fontSize: 18,
    },
    modalContent: {
      backgroundColor: Colors.WHITE,
      width: Sizing.vw * 90,
      height: Sizing.vh * 30,
      borderRadius: 10,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalHeader: {
      color: Colors.RED,
      marginBottom: Sizing.vh * 2,
    },
    passwordTextInput: {
      height: Sizing.vh * 7,
      borderColor: Colors.BLACK,
      borderWidth: 1,
      marginBottom: Sizing.vh * 2,
      borderRadius: 12,
    },
    okCancelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: Sizing.vw * 75,
    },
    okButton: {
      borderWidth: 2,
      borderColor: Colors.BLACK,
      paddingHorizontal: Sizing.vw * 10,
      paddingVertical: Sizing.vh * 2,
      borderRadius: 18,
      marginVertical: 5,
    },
    cancelButton: {
      borderWidth: 2,
      borderColor: Colors.BLACK,
      paddingHorizontal: Sizing.vw * 10,
      paddingVertical: Sizing.vh * 2,
      borderRadius: 18,
      marginVertical: 5,
    },
    buttonText: {
      color: Colors.BLACK,
      textAlign: 'center',
    },
    wifiMainContainer: {
      flex: 1,
      paddingVertical: Sizing.vh * 6,
      paddingHorizontal: Sizing.vw * 6,
    },
    tochBtn: {
      paddingVertical: Sizing.vh * 1.2,
      paddingHorizontal: Sizing.vw * 5,
      borderBottomWidth: 1,
      borderBottomColor: Colors.DARK_GREY,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    imgWifi: {
      width: 30,
      height: 30,
    },
    disName: {
      fontSize: 12,
    },
  },

  // ToggleSwitch
  ToggleSwitch: {
    mainContainer: {
      width: widthLarge,
      height: height,
      borderRadius: widthLarge / 2,
      backgroundColor: Colors.WHITE,
      borderColor: Colors.LIGHT_GREEN,
      borderWidth: 2,
      flexDirection: 'row',
      overflow: 'hidden',
      alignItems: 'center',
    },
    leftCircle: {
      left: 0,
    },
    rightCircle: {
      right: 0,
    },
    textContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },

  // CountdownProgressbar
  CountdownProgressBar: {
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    valueContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative',
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    barContainer: {
      position: 'relative',
      height: Sizing.vh * 4.5,
      width: Sizing.vw * 90,
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      borderRadius: 30,
      paddingLeft: 2,
    },
  },

  // CustomBottomNavigation
  CustomBottomNavigation: {
    mainContainer: {
      width: Sizing.vw * 100,
      alignItems: 'center',
      marginTop: 10,
    },
    iconContainer: {
      width: widthLarge,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderRadius: 12,
      marginBottom: 12,
      alignItems: 'center',
      backgroundColor: Colors.WHITE,
    },
    iconImg: {
      height: Sizing.vh * 6,
      width: Sizing.vw * 12,
    },
  },

  // CustomCheckBox
  CustomCheckBox: {
    mainContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 24,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderWidth: 1,
      borderColor: Colors.WHITE,
      marginRight: Sizing.vw * 4,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    checkImg: {
      height: '60%',
      width: '60%',
    },
    lableText: {
      fontSize: 18,
      color: 'white',
    },
  },

  // Imbalancing bar
  ImbalancingBar: {
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.WHITE,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    progressBarContainer: {
      width: widthSmall,
      height: height,
      borderRadius: widthSmall / 2,
      borderColor: Colors.LIGHT_GREEN,
      borderWidth: 2,
      backgroundColor: Colors.WHITE,
      position: 'relative',
      justifyContent: 'center',
    },
    valueContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    percentageContainer: {
      height: Sizing.vh * 6,
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      width: Sizing.vw * 20,
      justifyContent: 'center',
      marginBottom: 6,
      borderRadius: 10,
    },
    barContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // borderWidth: 1,
      alignItems: 'center',
    },
    img: {
      marginTop: 7,
      height: 56,
      width: 56,
      // borderWidth: 1,
    },
  },

  // DividerLine
  DividerLine: {
    topContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 6,
      marginBottom: 6,
    },
    middleContainer: {
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
          alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      height: 2,
      backgroundColor: Colors.BLACK,
      width: '100%',
    },
  },

  // DropdownSetPoint
  DropdownSetPoint: {
    btnStyle: {
      borderWidth: 2,
      margin: 5,
      backgroundColor: Colors.WHITE,
      width: Sizing.vw * 15.5,
      height: Sizing.vh * 7.5,
      borderRadius: 12,
      borderColor: Colors.LIGHT_GREEN,
      marginRight: Sizing.vw * 2,
      padding: -10,
    },
    itemStyle: {
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      padding: -10
    },
  },

  // OnOff
  OnOff: {
    mainContainer: {},
    container: {
      height: height,
      width: Sizing.vw * 30,
      backgroundColor: Colors.WHITE,
      borderRadius: (Sizing.vw * 30) / 2,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
    },
    circle: {
      height: Sizing.vh * 2.45 * 1.5,
      width: Sizing.vh * 2.45 * 1.5,
      borderRadius: (Sizing.vh * 2.45 * 1.5) / 2,
      backgroundColor: Colors.LIGHT_GREY,
      borderWidth: 2,
      borderColor: Colors.WHITE,
      // position: 'absolute',
      left: -1,
    },
    circleActive: {
      left: Sizing.vw * 21.4,
      backgroundColor: Colors.LIGHT_GREEN,
    },
    onOffStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },

  // ThreePointSlider
  ThreePointSlider: {
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderWidth: 2,
      margin: 8,
      borderRadius: height / 2,
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Sizing.vw * 90,
      height: height,
      borderColor: Colors.LIGHT_GREEN,
      paddingHorizontal: 1,
      paddingVertical: 0.5,
    },
    btnContainer: {
      height: Sizing.vh * 2.45 * 1.5,
      width: Sizing.vh * 2.45 * 1.5,
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      borderRadius: (Sizing.vh * 2.45 * 1.5) / 2,
    },
  },

  // TrippleBtn
  TrippleBtn: {
    mainContainer: {
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
      alignSelf: 'center',
      // borderWidth: 2,      
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    btnContainerOuter: {
      width: Sizing.screenWidth > 430 ? 100 : Sizing.vw * 25 ,
      height: Sizing.screenWidth > 430 ? 100 : Sizing.vw * 25 ,
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      padding: 1,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    btnContainer: {
      // padding: 10,
      width: Sizing.screenWidth > 430 ? 90 : Sizing.vw * 23 ,
      height: Sizing.screenWidth > 430 ? 90 : Sizing.vw * 23 ,
      borderWidth: 2,
      borderColor: Colors.WHITE,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  // NewRangeSlider
  NewRangeSlider: {
    barContainer: {
      width: widthLarge,
      height: height,
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      borderRadius: (Sizing.vw * 90) / 2,
      position: 'relative',
      zIndex: -1,
    },
    container: {
      alignItems: 'center',
      borderRadius: 12,
      backgroundColor: Colors.WHITE,
    },

    values1: {
      color: Colors.BLUE,
      marginRight: Sizing.vw * 85,
      top: height * 1.5,
      zIndex: 2,
    },

    values2: {
      color: Colors.BLUE,
      marginLeft: Sizing.vw * 85,
      bottom: height * 0.0001,
      zIndex: 2,
    },

    selectedStyle: {
      backgroundColor: Colors.LIGHT_GREEN,
      height: Sizing.vh * 3 * 1.2,
      marginTop: -height * 0.0059,
      borderColor: Colors.BLACK,
    },

    unselectedStyle: {
      backgroundColor: Colors.WHITE,
      height: CustomStyles.circularProgressBarSmall.height * 1.2,
      marginTop: -height * 0.0067,
      borderRadius: 20,
      borderColor: Colors.LIGHT_GREEN,
    },

    containerStyle: {
      height: Sizing.vh * 4.5,
      borderRadius: 10,
      left: Sizing.vw * 4.8,
    },

    trackStyle: {
      height: Sizing.vh * 5,
    },

    customMarker: {
      width: Sizing.vw * 9,
      height: Sizing.vh * 3 * 1.2,
      borderRadius: (Sizing.vw * 56) / 2,
      borderColor: Colors.BLACK,
      justifyContent: 'center',
      alignItems: 'center',
      top: height * 0.012,
    },

    markerText: {
      color: Colors.BLACK,
      fontWeight: 'bold',
      position: 'absolute',
    },

    minMaxTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },
  },

  // VerticalProgressBar
  VerticalProgressBar: {
    container: {
      width: Sizing.vw * 18.8,
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      padding: 10,
      margin: 5,
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Sizing.vw * 100,
      paddingHorizontal: 50,
    },
    button: {
      padding: 10,
      color: Colors.LIGHT_GREEN,
      marginBottom: 20,
    },
    progressBarContainer: {
      borderWidth: 2,
      borderColor: Colors.LIGHT_GREEN,
      borderRadius: 15,
      // overflow: 'hidden',
      alignItems: 'center',
      height: Sizing.vw * 6,
      width: Sizing.vh * 10,
      // transform: [{ rotate: '-90deg' }], // Rotate the slider to make the track vertical
    },
    percentageText: {
      fontSize: 18,
    },
    txtlbl: {
      fontSize: 16,
    },
    borderVen: {
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    smallImg: {
      height: 35,
      width: 40,
      // marginTop: 8,
    },
    largeImg: {
      height: 45,
      width: 50,   
      // marginBottom: 0
      // borderWidth: 20,
      // borderColor: "#fffff",
      // backgroundColor: '#000000'
     },
  },

  
});


export default componentStyle;