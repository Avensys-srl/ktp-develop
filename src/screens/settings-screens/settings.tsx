import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Header} from '../../component';
import {SettingsCard} from './settings-card';
import CustomBottomNavigation from '../../component/CustomBottomNavigation';
import {Colors, Sizing} from '../../styles';
<<<<<<< HEAD
import {Routes} from '../../routes';
=======
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b

export const Settings = () => {
  const SettingsTab = [
    {title: 'Language', route: null, disabled: true},
    {title: 'Screen Saver', route: null, disabled: true},
    {title: 'Date', route: null, disabled: true},
<<<<<<< HEAD
    {title: 'Profile', route: Routes.Profile, disabled: false},
=======
    {title: 'Profile', route: null, disabled: true},
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
  ];

  return (
    <>
<<<<<<< HEAD
      <Header canGoBack={false} title="Settings" headerBG={1} optionsStar={1} />
=======
      <Header canGoBack={false} title="Settings" />
>>>>>>> 0380e2125e53c9b60a686252a32aba68c4082d6b
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
