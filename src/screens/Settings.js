import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Header} from '../component/header';
import {SettingsCard} from '../component/settings-card';
import CustomBottomNavigation from '../component/CustomBottomNavigation';
import {Colors, Sizing} from '../styles';
import {Routes} from '../routes';
import { userType } from "../configs";

export const Settings = () => {
  const SettingsTab = [
    {title: 'Language', route: Routes.LanguageScreen, disabled: false},
    {title: 'Screen Saver', route: null, disabled: true},
    {title: 'Date', route: null, disabled: true},
    {title: 'Profile', route: Routes.Profile, disabled: false},
    {title: 'Connectivity', route: Routes.Communication, disabled: false},
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE,
        flex: 1,
        // borderColor: Colors.BLACK,
        // borderWidth: 2,
        borderRadius: 10,
      }}>
      <Header canGoBack={false} title="Settings" headerBG={1} optionsStar={1} />
      <View style={Styles.container}>
        {SettingsTab.map((item, index) => {
          return (
            <SettingsCard
              title={item.title}
              index={index}
              onPress={item.route}
              disabled={item.disabled}
            />
          );
        })}
      </View>
      <CustomBottomNavigation  OC={userType.service}  isLogin={1}></CustomBottomNavigation>
    </SafeAreaView>
  );
};

const Styles = ScaledSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    // width: Sizing.vw * 100,
    width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 90,
    alignSelf: "center",
    backgroundColor: Colors.WHITE,
  },
});
