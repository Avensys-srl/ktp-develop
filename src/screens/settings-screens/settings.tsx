import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Header} from '../../component';
import {SettingsCard} from './settings-card';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';

export const Settings = () => {
  const SettingsTab = [
    {title: 'Language', route: null, disabled: true},
    {title: 'Screen Saver', route: null, disabled: true},
    {title: 'Date', route: null, disabled: true},
    {title: 'Profile', route: null, disabled: true},
  ];

  return (
    <>
      <Header canGoBack={false} title="Settings" />
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
      <CustomBottomNavigation></CustomBottomNavigation>
    </>
  );
};

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: Sizing.vw * 100,
  },
});
