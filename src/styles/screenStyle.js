import { StyleSheet } from 'react-native';
import { Colors, Sizing } from '.';

const screenStyle = StyleSheet.create({
  
  cardDesign: {
    container: {
      // width: Sizing.vw * 100,
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 100,
      alignSelf: "center",
      paddingHorizontal: 2,
      alignItems: 'center',
      // borderWidth: 3,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 6,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: Colors.BLACK,
      height: 37,
      justifyContent: 'space-between',
      width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
      alignSelf: "center",
    },
    starImage: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
    },
    title: {
      color: Colors.WHITE,
      fontSize: 20,
    },
     txttitle: {
      color: Colors.WHITE,
      fontSize: 19,
    },
    valuesContainer: {
      width: Sizing.vw * 90,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
    },
  },
});

export default screenStyle;