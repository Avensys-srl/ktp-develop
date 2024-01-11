import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {  Header } from '../component/header';
import {ImageSource} from '../common/imageSource';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';
import {CustomStyles} from "../styles/CustomStyles";
import DividerLine from '../component/DividerLine';
import AvenSwitch from "../component/AvenSwitch";
import AvenSlider from '../component/AvenSlider';
import AvenTripleSlider from "../component/AvenTripleSlider";

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
import { userType } from "../configs";

export const Bypass = () => {
  // Stato iniziale o stato ricevuto da altre fonti
  const initialState = true;

  // Usa uno stato per tenere traccia del valore del toggle button
  const [value, setValue] = useState(0);
  const [isEnabled, setEnabled] = useState(false);
  const [isToggled, setIsToggled] = useState(initialState);
  // Funzione per aggiornare lo stato dal componente figlio
  const handleToggle = newValue => {
    setIsToggled(newValue);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* OLD HEADER */}
      {/* <View style={styles.bgheading}>
        <Text style={styles.headingTxt}>Bypass Settings</Text>
        <View style={styles.subRow}>
          <TouchableOpacity style={styles.iconClick}>
            <Image source={ImageSource.star} style={styles.imgHead} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ImageSource.arrow} style={styles.imgHead} />
          </TouchableOpacity>
        </View>
      </View> */}

      {/* NEW HEADER */}

      <Header
        canGoBack={true}
        title="Bypass"
        headerBG={1}
        optionsStar={1}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
      

        {/* NEW BYPASS OPERATION */}
        <View style={styles.filterAlarmContainer}>
            <AvenSwitch value={isEnabled} onValueChange={setEnabled} on="on" off="off" title="Bypass operation"   readOnly={ !userType.service}/>          
        </View>
        <DividerLine />

        <View style={styles.pairedView}>        
            <AvenTripleSlider value={value} onValueChange={setValue}  minValue="0" maxValue="100"   readOnly={ !userType.service}/>  
        </View>

        <DividerLine />

        <View style={styles.pairedView}>
          <AvenSlider title="Ref. outdoor  temperature: "  value={23} minValue="10" maxValue="35"   readOnly={ !userType.service}/>
        </View>

        <DividerLine />

        <View style={[styles.filterAlarmContainer, {marginTop: 22}]}>
             <AvenSwitch value={isToggled} onValueChange={setIsToggled} on="open" off="close" title="Bypass operation"   readOnly={ !userType.service}/>   
        
        </View>

        <DividerLine />

        <View style={styles.pairedView}>
          <AvenSlider title="summer-winter threshold: "   value={22} minValue="12" maxValue="32"   readOnly={ !userType.service}/>
         
        </View>
      </ScrollView>
      <CustomBottomNavigation OC={userType.service} />
      <Text style={styles.service}>service</Text>
    </SafeAreaView>
  );
};

export default Bypass;

const styles = StyleSheet.create({
  bgheading: {
    padding: 10,
    backgroundColor: Colors.LIGHT_GREEN,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingTxt: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  imgHead: {
    width: 25,
    height: 25,
  },
  subRow: {
    flexDirection: 'row',
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_GREEN,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    position: 'absolute',
    top: -1,
  },
  leftCircle: {
    left: -1,
  },
  rightCircle: {
    right: -1,
  },
  pairedView: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: Sizing.vw * 93,
    // height: Sizing.vh * 12,
    // borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
  },
  rateView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Sizing.vw * 93,
    height: Sizing.vh * 13,
    borderRadius: 5,
    margin: 15,
    marginTop: 0,
  },
  mainContainer: {
    flex: 1,
    width: Sizing.vw * 100,
    height: Sizing.vh * 100,
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  // ScrollView: {
  //   // flex: 1,
  //   width: Sizing.vw * 100,
  //   height: Sizing.vh * 100,
  //   borderWidth: 0,
  //   borderColor: Colors.BLUE,
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   backgroundColor: Colors.WHITE,
  // },

  filterAlarmContainer: {
    margin: Sizing.vw * 4,
    // borderWidth: 2,
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
  },
  filterAlarmText: {
    textAlign: 'center',
    marginBottom: Sizing.vh * 2,
    fontSize: Sizing.vw * 4,
    color: Colors.GREY500,
  },
  txttop: {
    marginTop: 25,
    color: Colors.GREY500,
  },
  iconClick: {
    marginRight: 10,
  },
  txt: {
    fontSize: 14,
    color: Colors.BLACK,
  },
  pairedViewNoBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Sizing.vw * 93,
    height: Sizing.vh * 15,
    margin: 15,
    marginBottom: 5,
    marginTop: 5,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  toggleSwitchContainer: {
    borderWidth: 2,
    borderColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    marginTop: 18,
    borderRadius: 12,
  },
  threePointSliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Sizing.vw * 100,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 12,
  },
  service: {
    color: userType.service ?   Colors.RED: Colors.BLACK,
    textAlign: 'center'
  },
 lglabel:{
  borderWidth: 1,
    width: Sizing.vw * 25,
    paddingLeft: 8,
    fontSize: 18,
    color: Colors.BLACK,
  },

});
