import React,{useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import {Header} from '../component/header';
import {ClimateControlCard} from '../component/services-cards/climate-control-card';
import CustomBottomNavigation from '../component/CustomBottomNavigation';

import {ImageSource} from '../common/imageSource';
import {dayTemperatureData, nightTemperatureData} from '../configs';
import {Colors, Sizing} from '../styles';
import CustomStyles from "../styles/CustomStyles";
import {ScaledSheet} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');
export const ClimateControl = () => {
  const [dayTemp, setDayTemp] = useState(22);
  const [nightTemp, setNightTemp] = useState(23);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        canGoBack={true}
        title="Temperature"
        headerBG={1}
        optionsStar={1}
      />
      <View style={styles.container}>
        <View style={{marginTop: height * 0.12}}>
          <Text style={CustomStyles.ComponentTitles}>Set points</Text>
        </View>

        <View style={styles.dropdownContainer}>
          <View>
            <ClimateControlCard
              source={ImageSource.sun}
              imageStyle={{}}
              box={true}
              tempNumber={`${dayTemp}°C `}
              iconText="T1"
            />
          </View>
          <View>
            <ClimateControlCard
              source={ImageSource.moon}
              imageStyle={{}}
              box={true}
              tempNumber={`${nightTemp}°C `}
              iconText="T2"
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Image
              source={ImageSource.lockOpen}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>
        </View>
      </View>
      <Text style={[CustomStyles.ComponentTitles, {marginTop: Sizing.vh * 6}]}>
        Summer winter change
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginLeft: Sizing.vw * 20,
          position: 'relative',
        }}>
        <View style={{}}>
          <ClimateControlCard
            source={ImageSource.sun}
            imageStyle={{}}
            box={true}
            tempNumber={`${dayTemp}°C `}
            iconText=""
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            source={ImageSource.lockOpen}
            style={{
              width: 50,
              height: 50,
              marginRight: -Sizing.vw * 18,
            }}
          />
        </View>

        <View>
          <Image
            source={ImageSource.snowflake}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              top: 4,
              right: 235,
            }}
          />
          <Image
            source={ImageSource.sun}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              top: 4,
              right: 188,
            }}
          />
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <CustomBottomNavigation OC={0} />
      </View>
    </SafeAreaView>
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
    // flex: 1,
    // width: Sizing.vw * 100,
    // height: Sizing.vh * 100,
    // borderWidth: 1,
    // borderColor: 'blue',
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
    // marginTop: height * 0.03,
    justifyContent: 'space-evenly',
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
