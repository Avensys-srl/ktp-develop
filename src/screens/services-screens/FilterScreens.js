import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Filter_Settings2 from './Filter_Settings2';
import Filter_Settings3 from './Filter_Settings3';

const FilterScreens = () => {
  return (
    <Swiper showsPagination={false}>
      <View style={styles.slide}>
        <Filter_Settings2 />
      </View>
      <View style={styles.slide}>
        <Filter_Settings3 />
      </View>
    </Swiper>
  );
};

export default FilterScreens;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
