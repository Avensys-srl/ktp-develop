import {StyleSheet} from 'react-native';
import {Colors} from '.';
import {Sizing} from '.';

const height = Sizing.vh * 3;

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
  },

  //   Activation button
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
      width: Sizing.vw * 7.5,
      height: Sizing.vh * 4,
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
      height: height,
    },

    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  // WIFI scanner
  WifiScannerScreen: {
    wifiNames: {
      color: Colors.DARK_GREY,
      fontSize: 20,
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
      width: Sizing.vw * 8,
      height: Sizing.vh * 3,
    },
  },
});
