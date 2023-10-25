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
import React, {useState} from 'react';
import {
  CircleProgressBar,
  ToggleSwitch,
  ThreePointSlider,
  OnOff,
} from '../../component';
import {ImageSource} from '../../common/imageSource';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors} from '../../styles';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export const Bypass = () => {
  // Stato iniziale o stato ricevuto da altre fonti
  const initialState = true;

  // Usa uno stato per tenere traccia del valore del toggle button
  const [isToggled, setIsToggled] = useState(initialState);

  // Funzione per aggiornare lo stato dal componente figlio
  const handleToggle = newValue => {
    // setIsToggled(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bgheading}>
        <Text style={styles.headingTxt}>Bypass Settings</Text>
        <View style={styles.subRow}>
          <TouchableOpacity style={styles.iconClick}>
            <Image source={ImageSource.star} style={styles.imgHead} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ImageSource.arrow} style={styles.imgHead} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.pairedView}>
          <OnOff status={'Bypass operation'} />
        </View>
        <View style={styles.pairedView}>
          <Text style={styles.txt}>Operation</Text>
          <ThreePointSlider TBC={1} />
          <Text style={styles.txt}>manual</Text>
        </View>
        <View style={styles.pairedView}>
          <CircleProgressBar
            TSB={'Ref. outdoor  temperature'}
            TSL={15}
            TSR={30}
            RIV={0.3}
            BG={1}
          />
        </View>
        <View style={styles.pairedViewNoBorder}>
          <Text style={styles.txttop}>bypass position</Text>
          <ToggleSwitch
            TOO={''}
            CL={'Open'}
            CR={'Close'}
            BG={1}
            isToggled={isToggled}
            onToggle={handleToggle}
          />
        </View>
        <View style={styles.pairedView}>
          <CircleProgressBar
            TSB={'summer-winter threshold'}
            TSL={12}
            TSR={32}
            RIV={0.2}
            BG={1}
          />
        </View>
      </ScrollView>
      <CustomBottomNavigation></CustomBottomNavigation>
    </View>
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
    color: 'white',
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
    borderColor: 'black',
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
    width: width * 0.93,
    height: height * 0.12,
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
  },
  rateView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.93,
    height: height * 0.13,
    borderRadius: 5,
    margin: 15,
    marginTop: 0,
  },
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ScrollView: {
    // flex: 1,
    width: '100%',
    height: '100%',
    borderWidth: 0,
    borderColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  txttop: {
    marginTop: 25,
  },
  iconClick: {
    marginRight: 10,
  },
  txt: {
    fontSize: 14,
  },
  pairedViewNoBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.93,
    height: height * 0.15,
    margin: 15,
    marginBottom: 5,
    marginTop: 5,
  },
});
