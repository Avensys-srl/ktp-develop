import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {accessoriesName, userType} from '../../configs';
import {AccessoriesCard, Header} from '../../component';
import {ScaledSheet} from 'react-native-size-matters';
import {useState} from 'react';
import {ServicesCard} from './services-card';
import {Routes} from '../../routes';
import {Colors, Sizing} from '../../styles';

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
  const [activeTab, setActiveTab] = useState(true);
  return (
    <>
      <Header title="Accessories" canGoBack={true} />
      <View style={{flex: 1, width: '100%'}}>
        {activeTab && userType.technician ? (
          <View style={styles.container}>
            {accessoriesName.map(item => {
              return (
                <AccessoriesCard
                  title={item.title}
                  onPress={item.route}
                  disabled={item.disable}
                />
              );
            })}
          </View>
        ) : (
          <ScrollView>
            {ServicesTab.map((item, index) => {
              console.log('index---', index);
              return (
                <ServicesCard
                  title={item.title}
                  index={index}
                  onPress={item.route}
                  disabled={item.disabled}
                  values={item.data}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={[styles.buttons, activeTab && {backgroundColor: 'black'}]}
          onPress={() => {
            setActiveTab(true);
          }}>
          <Text style={{color: activeTab ? 'white' : 'black'}}>
            Listed By Name
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, !activeTab && {backgroundColor: 'black'}]}
          onPress={() => {
            setActiveTab(false);
          }}>
          <Text style={{color: activeTab ? Colors.BLACK : Colors.WHITE}}>
            Listed By Function
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
    width: Sizing.vw * 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    borderWidth: 1,
    height: Sizing.vh * 5,
    width: Sizing.vw * 48,
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: '5@ms',
    marginVertical: Sizing.vh * 0.6,
  },
});
