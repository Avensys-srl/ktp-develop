import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  PanResponder,
} from 'react-native';

import { Header } from "../component/header";
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';

import AvenTwoRadio from '../component/AvenTwoRadio';
import AvenImbalancingSlider from '../component/AvenImbalancingSlider';
import AvenTrippleBtn from "../component/AvenTrippleBtn";
import AvenVerticalProgress from '../component/AvenVerticalProgress';
import AvenVerticalBar from '../component/AvenVerticalBar';
import { userType } from "../configs";

export const Ventilation = () => {
  // Stato iniziale o stato ricevuto da altre fonti
  const initialState = false;

  // Usa uno stato per tenere traccia del valore del toggle button
  const [isToggled, setIsToggled] = useState(initialState);

  // Funzione per aggiornare lo stato dal componente figlio
  const handleToggle = newValue => {
    setIsToggled(newValue);
  };

  return (
    <View style={styles.container}>
      <Header
        canGoBack={true}
        title="Ventilation"
        headerBG={1}
        optionsStar={1}
      />
      <ScrollView style={{height: Sizing.vh * 75, }}>
        <View style={styles.pairedView}>
          <Text style={styles.txttop}></Text>
           <AvenTwoRadio value={isToggled} onValueChange={setIsToggled} on="3speeds" off="stepless" title=""  readOnly={ userType.service}/>
        </View>
        <View style={{flexDirection: "column", justifyContent: 'center',  marginTop: Sizing.vw * 3, marginBottom: Sizing.vw * 3}}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 20,
              width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 85 ,
              alignSelf: 'center',
              justifyContent: 'space-around',
           
            }}>
            <AvenVerticalBar TS={isToggled ? 'CO2' : 'Main'} VS={12} Visible={true} Probes={0}/>

            <AvenVerticalBar TS={"VOC"} VS={45} Visible={isToggled}  Probes={0}/>
            <AvenVerticalBar TS={"RH"} VS={87} Visible={isToggled}  Probes={0}/>
            <AvenVerticalBar TS={'boost'} VS={90} Visible={true} Probes={false}/>
          </View>
        </View>
     
        <View style={{marginBottom: 20, marginTop: 10, alignItems: "center"}}>
            <AvenTrippleBtn
              TBL={1}
              TBR={0}
              TBC={0}
              TbL={'FSC'}
              TbC={'CAP'}
              TbR={'CAF'}
            />
        </View>

        <View style={styles.pairedViewNoBorder}>          
          <AvenImbalancingSlider title="Imbalance" minValue="-50" maxValue="50" unit="°C"  readOnly={ !userType.service}/>
          
        </View>
      </ScrollView>
      <CustomBottomNavigation   OC={userType.service}  isLogin={1}/>
      <Text style={styles.service}>service</Text>
    </View>
  );
};

export default Ventilation;

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
    backgroundColor: Colors.GREEN,
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
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    height: Sizing.vh * 7,
    borderRadius: 5,
    margin: 15,
    marginBottom: 10,
    marginTop: 5,
  },
  container: {
    flex: 1,
    // width: Sizing.vw * 100,
    // height: Sizing.vh * 97,
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
    // justifyContent: 'flex-end',
    backgroundColor: Colors.WHITE,
  },
  txttop: {
    // marginTop: 25,
  },
  iconClick: {
    marginRight: 10,
  },
  pairedViewNoBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: Sizing.vw * 90,
    height: Sizing.vh * 15,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 5,
    // borderWidth: 1,
  },
  service: {
    color: userType.service ?   Colors.RED: Colors.BLACK,
    textAlign: 'center'
  }
});
