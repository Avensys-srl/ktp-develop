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
  VerticalProgressBar,
  TrippleBtn,
  ToggleSwitch,
  CenteredProgressBar,
  Header,
} from '../../component/index';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

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
      {/* <View style={styles.bgheading}>
        <Text style={styles.headingTxt}>Ventilation</Text>
      </View> */}
      <Header canGoBack={true} title="Ventilation" />
      <ScrollView styles={{height: Sizing.vh * 75}}>
        <View style={styles.pairedView}>
          <Text style={styles.txttop}></Text>
          <ToggleSwitch
            TOO={''}
            CL={'stepless'}
            CR={'3speeds'}
            BG={0}
            isToggled={isToggled}
            onToggle={handleToggle}
          />
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <VerticalProgressBar TS={isToggled ? 1 : 'Main'} VS={12} />
          <VerticalProgressBar TS={2} VS={45} Visible={isToggled} />
          <VerticalProgressBar TS={3} VS={87} Visible={isToggled} />
          <VerticalProgressBar TS={'boost'} VS={90} />
        </View>
        <View>
          <TrippleBtn
            TBL={0}
            TBR={0}
            TBC={1}
            TbL={'FSC'}
            TbC={'CAP'}
            TbR={'CAF'}
          />
        </View>
        <View style={styles.pairedViewNoBorder}>
          <CenteredProgressBar IST={'imbalance'} RIV={30} BG={1} />
        </View>
      </ScrollView>
      <CustomBottomNavigation />
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
    width: Sizing.vw * 93,
    height: Sizing.vh * 7,
    borderWidth: 0,
    borderRadius: 5,
    margin: 15,
    marginBottom: 5,
    marginTop: 5,
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
  container: {
    // flex: 1,
    width: Sizing.vw * 100,
    height: Sizing.vh * 100,
    borderWidth: 2,
    borderColor: Colors.RED,
    borderRadius: 10,
    // justifyContent: 'flex-end',
    backgroundColor: Colors.WHITE,
  },
  txttop: {
    marginTop: 25,
  },
  iconClick: {
    marginRight: 10,
  },
  pairedViewNoBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Sizing.vw * 93,
    height: Sizing.vh * 15,
    margin: 15,
    marginBottom: 5,
    marginTop: 5,
  },
});
