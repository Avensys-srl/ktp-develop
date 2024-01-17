import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Header} from '../component/header';
import {ServicesCard} from '../component/services-card';
import {Routes} from '../routes';
import {Colors, Sizing} from '../styles';
import CustomBottomNavigation from '../component/CustomBottomNavigation';

import { userType } from "../configs";

export const Services = () => {
  const ServicesTab = [
    // {title: 'general setting', route: null, disabled: true},
    {title: 'filtration', route: Routes.Filter, disabled: false},
    {title: 'ventilation', route: Routes.Ventilation, disabled: false},
    {title: 'climate', route: Routes.Climate, disabled: false},
    {title: 'accessories', route: Routes.Accessories, disabled: false},
    // {title: 'communication', route: Routes.Communication, disabled: false},
    {title: 'scheduler', route: null, disabled: true},
    {title: 'report', route: null, disabled: true},
  ];
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE,
        flex: 1,
        // borderColor: Colors.RED,
        // borderWidth: 2,
        borderRadius: 10,
      }}>
      <Header canGoBack={false} title="Services" headerBG={1} optionsStar={1} />
      <View style={Styles.container}>
        {ServicesTab.map((item, index) => {
          console.log('index---', index);
          return (
            <ServicesCard
              title={item.title}
              index={index}
              onPress={item.route}
              disabled={item.disabled}
              key={index}
            />
          );
        })}
      </View>
      <CustomBottomNavigation isLogin={1}></CustomBottomNavigation>
    </SafeAreaView>
  );
};

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
