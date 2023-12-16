import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  CircleProgressBar,
  ToggleSwitch,
  ThreePointSlider,
  OnOff,
  Header,
} from '../../component';
import {ImageSource} from '../../common/imageSource';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors} from '../../styles';
import ToggleSwitchFullWidth from '../../component/ToggleSwitchFullWidth';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export const Bypass = () => {
  // Stato iniziale o stato ricevuto da altre fonti
  const initialState = true;

  // Usa uno stato per tenere traccia del valore del toggle button
  const [isToggled, setIsToggled] = useState(initialState);

  // Funzione per aggiornare lo stato dal componente figlio
  const handleToggle = newValue => {
    setIsToggled(newValue);
  };

  return (
    <View style={styles.container}>
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

      <Header canGoBack={true} title="Bypass setting" />

      <ScrollView>
        {/* OLD BYPASS OPERATION */}

        {/* <View style={styles.pairedView}>
          <OnOff status={'Bypass operation'} />
        </View> */}

        {/* NEW BYPASS OPERATION */}
        <View style={styles.filterAlarmContainer}>
          <View>
            <OnOff />
          </View>

          <Text style={styles.filterAlarmText}>Bypass operation</Text>
        </View>

        <View style={styles.pairedView}>
          <Text style={styles.txt}>Operation</Text>
          <ThreePointSlider TBC={1} />
          <View style={styles.threePointSliderTextContainer}>
            <Text style={styles.txt}>auto</Text>
            <Text style={styles.txt}>autostby</Text>
            <Text style={styles.txt}>manual</Text>
          </View>
        </View>

        <View style={styles.pairedView}>
          <Text style={styles.txt}>Ref. outdoor temperature</Text>
          <CircleProgressBar
            TSB={'Ref. outdoor  temperature'}
            TSL={10}
            TSR={35}
            RIV={0.2}
            BG={1}
          />
        </View>

        <View style={styles.pairedViewNoBorder}>
          <Text style={styles.txttop}>bypass position</Text>
          <ToggleSwitchFullWidth
            TOO={''}
            CL={'Open'}
            CR={'Close'}
            BG={1}
            isToggled={isToggled}
            onToggle={handleToggle}
          />
        </View>
        <View style={styles.pairedView}>
          <Text style={styles.txt}>summer-winter threshold</Text>
          <CircleProgressBar
            TSB={'summer-winter threshold'}
            TSL={12}
            TSR={32}
            RIV={0.2}
            BG={1}
          />
        </View>
      </ScrollView>
      <CustomBottomNavigation OC={1} />
      <Text style={{textAlign: 'center', color: 'red'}}>Service</Text>
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

  filterAlarmContainer: {
    margin: width * 0.04,
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 12,
  },
  filterAlarmText: {
    textAlign: 'center',
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    color: 'grey',
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
    // borderWidth: 1,
    // borderColor: 'red',
  },
  toggleSwitchContainer: {
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    marginTop: 18,
    borderRadius: 12,
  },
  threePointSliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,
  },
});
