
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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


const styles = StyleSheet.create({
  slide: {
  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FilterScreens;
