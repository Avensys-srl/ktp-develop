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
import { userType } from "../configs";

const {width, height} = Dimensions.get('window');
export const ClimateControl = () => {
  const [dayTemp, setDayTemp] = useState(22);
  const [nightTemp, setNightTemp] = useState(23);

  const [locked1, setLocked1] = useState(false);
  const [locked2, setLocked2] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        canGoBack={true}
        title="Climate"
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
              mainImg = {ImageSource.home_t1}
              leftImg={ImageSource.sun}
              imageStyle={{}}
              box={true}
              tempNumber={`${dayTemp}°C `}
              iconText=""
            />
          </View>
          <View>
            <ClimateControlCard
              mainImg={ImageSource.home_t2}
              leftImg={ImageSource.moon}
              imageStyle={{}}
              box={true}
              tempNumber={`${nightTemp}°C `}
              iconText=""
            />
          </View>
          {
            userType.service ? 
               <TouchableOpacity  style={{justifyContent: 'center', alignItems: 'flex-end'}} onPress={ () => setLocked1(!locked1) }>
                    <Image
                      style={styles.lockImg}
                      source={locked1 ? ImageSource.lock : ImageSource.lockOpen}               
                    />
                </TouchableOpacity >            
            : <></>
          }

        </View>
      </View>
      <Text style={[CustomStyles.ComponentTitles, {marginTop: Sizing.vh * 6}]}>
        Summer winter change
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',      
          position: 'relative',
        }}>
          <View style={{}}>
            <ClimateControlCard
              mainImg={ImageSource.house_2}
              imageStyle={{}}
              box={true}
              tempNumber={`${dayTemp}°C `}
              iconText=""
            />
          </View>
          {
            userType.service ? 
               <TouchableOpacity  style={{justifyContent: 'center', alignItems: 'flex-end'}} onPress={ () => setLocked2(!locked2) }>
                    <Image
                      style={styles.lockImg}
                      source={locked1 ? ImageSource.lock : ImageSource.lockOpen}               
                    />
                </TouchableOpacity >            
            : <></>
          }          
      </View>
      <View style={styles.navigationContainer}>
        <CustomBottomNavigation  OC={userType.service} />
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor:  userType.service ?   Colors.RED: Colors.BLACK,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    alignItems: "center"
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
    // borderWidth: 1,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
      alignSelf: 'center',
    flexDirection: 'row',
    // marginTop: height * 0.03,
    justifyContent: 'space-between',
  },
  lockImg: {
    width: 40,
    height: 40,
    // marginRight: -Sizing.vw * 18,
  }
});
