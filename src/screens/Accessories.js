import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React,{useState} from 'react';
import {accessoriesName, userType} from '../configs';
import {Header} from '../component/header';
import {AccessoriesCard} from '../component/services-cards/accessories-card';
import {ScaledSheet} from 'react-native-size-matters';
import {ServicesCard} from '../component/services-card';
import {Routes} from '../routes';
import {Colors, Sizing} from '../styles';

const ServicesTab = [
  {
    title: 'preheater',
    route: Routes.PreHeater,
    disabled: false,
    data: ['PEHD', 'PHWD'],
  },
  {
    title: 'postheater',
    route: Routes.PostHeater,
    disabled: false,
    data: ['SSR', 'HWD', 'EHD'],
  },
  {
    title: 'post cooling',
    route: Routes.PostCooling,
    disabled: false,
    data: ['CWD', 'EHD'],
  },
  {
    title: 'bypass',
    route: Routes.Bypass,
    disabled: false,
    data: ['BPD', 'EBPD2', 'EBPD'],
  },
  {
    title: 'probs',
    route: Routes.Probs,
    disabled: false,
    data: [
      'P1VOC',
      'P1CO2',
      'P1RH',
      'P2RH',
      'P2CO2',
      'EXT1',
      'EXT2',
      'EXT3',
      'EXT4',
      'AWP',
      'DPPV2',
    ],
  },
  {title: 'comm. modules', route: null, disabled: true, data: ['DSC', 'MBUS']},
  {
    title: 'ventilation mode',
    route: null,
    disabled: true,
    data: ['FLW1', 'PCAF', 'PCAP', 'FLW2'],
  },
  {title: 'I/O', route: null, disabled: true, data: ['IN', 'OUT', 'FKI']},
];
export const Accessories = () => {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <>
      <Header
        title="Accessories"
        canGoBack={true}
        optionsStar={1}
        headerBG={1}
      />
      <View style={{flex: 1, width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 100, 
          alignSelf: 'center',}}>
        {activeTab && userType.technician ? (
          <View style={styles.container}>
            {accessoriesName.map((item,index) => {
              console.log('accs',item)
              return (
                <AccessoriesCard
                  index={index}
                  title={item.title}
                  onPress={item.route}
                  disabled={item.disable}
                  key={index}
                />
              );
            })}
          </View>
        ) : (
          <ScrollView>
            {ServicesTab.map((item, index) => {
              console.log('index---', index);
              console.log('SRVICE',item)
              return (
                <ServicesCard
                  title={item.title}
                  index={index}
                  key={index}
                  onPress={item.route}
                  disabled={item.disabled}
                  values={item.data}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 85,
          alignSelf: 'center',
          // borderWidth: 1,
        }}>
        <TouchableOpacity
          style={[
            styles.buttons,
            !activeTab && {backgroundColor: Colors.BLACK},
          ]}
          onPress={() => {
            setActiveTab(false);
          }}>
          <Text style={{color: activeTab ? Colors.BLACK : Colors.WHITE}}>
            Listed By Function
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, activeTab && {backgroundColor: Colors.BLACK}]}
          onPress={() => {
            setActiveTab(true);
          }}>
          <Text style={{color: activeTab ? Colors.WHITE : Colors.BLACK}}>
            Listed By Name
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
      alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    borderWidth: 1,
    height: Sizing.vh * 5,
    width:Sizing.screenWidth > 430 ? 220: Sizing.vw * 48, 
     
    // width: 
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: '5@ms',
    marginVertical: Sizing.vh * 0.6,
  },
});
