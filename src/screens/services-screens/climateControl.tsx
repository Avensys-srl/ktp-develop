import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';
import {Header, ClimateControlCard} from '../../component';
import {ImageSource} from '../../common/imageSource';
import {ScaledSheet} from 'react-native-size-matters';
import {useState} from 'react';
import {dayTemperatureData, nightTemperatureData} from '../../configs';
import Demo from '../../component/DropdownSetPoint';
import {CenteredProgressBar} from '../../component/index';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';

const {width, height} = Dimensions.get('window');
export const ClimateControl = () => {
  const [dayTemp, setDayTemp] = useState(22);
  const [nightTemp, setNightTemp] = useState(23);

  return (
    <View style={styles.mainContainer}>
      <Header canGoBack={true} title="Temperature Set Point" />
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <ClimateControlCard
            source={ImageSource.sun}
            imageStyle={{}}
            box={true}
            tempNumber={`${dayTemp}°C `}
          />
          <ClimateControlCard
            source={ImageSource.moon}
            imageStyle={{}}
            box={true}
            tempNumber={`${nightTemp}°C `}
          />
        </View>

        <View style={styles.progressbarContainer}>
          <CenteredProgressBar IST={'Summar Winter Changes'} RIV={20} BG={1} />

          <Image source={ImageSource.lockOpen} style={styles.lockImg} />
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <CustomBottomNavigation OC={0} />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.RED,
    backgroundColor: Colors.WHITE,
  },
  container: {
    flex: 1,
    width: Sizing.vw * 100,
    height: Sizing.vh * 100,
  },
  tempDropdown: {
    color: Colors.BLACK,
    fontSize: '20@ms',
  },
  navigationContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  dropdownContainer: {
    flexDirection: 'row',
    marginTop: height * 0.15,
  },
  progressbarContainer: {
    flexDirection: 'row',
    marginLeft: width * 0.07,
    width: Sizing.vw * 80,
    alignItems: 'center',
    marginTop: height * 0.35,
  },
  lockImg: {
    width: Sizing.vw * 8,
    height: Sizing.vh * 4,
    marginTop: height * 0.06,
    marginLeft: width * 0.02,
  },
});
