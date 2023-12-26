import {StyleSheet} from 'react-native';
import {Colors} from '.';
import {Sizing} from '.';

export const height = Sizing.vh * 3;
export const widthLarge = Sizing.vw * 90;
export const widthMedium = Sizing.vw * 80;
// const widthSmall = Sizing.vw*70

export default componentStyle = StyleSheet.create({
  // Common style
  commonStyles: {
    componentHeight: {
      height: height,
    },
    componentTitle: {
      textAlign: 'center',
      color: Colors.GREY500,
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
      width: Sizing.vh * 2.45,
      height: Sizing.vh * 2.45,
      borderRadius: (Sizing.vh * 2.45) / 2,
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
      color: Colors.RED,
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
    textContainer: {flexDirection: 'row', justifyContent: 'space-between'},
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
});
