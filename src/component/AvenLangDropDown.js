import React, {useState} from 'react';
// import SelectDropdown from 'react-native-select-dropdown';
import {View, StyleSheet, Dimensions, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';
import { ImageSource } from '../common/imageSource';

const {width, height} = Dimensions.get('window');

const AvenLangDropDown = ({data, defalutValue}) => {
 
    const [visible , setVisible] = useState( false );
    const [selected, setSelected] = useState( defalutValue );
    const toggleDropdown = () => {
      setVisible(!visible);
    }

    const changeLanguage = ( item ) => {
        setSelected(item);
        toggleDropdown();
    }

    return (
      <View>
        <TouchableOpacity style={ styles.button } onPress={ toggleDropdown }>
             <Image
                style={styles.flag}
                source={selected.image}               
              />
        </TouchableOpacity>
        {
          visible ? 
              <View style={ styles.dropdown }>
                  <ScrollView style={styles.scroll}>
                  {
                    data.map((item, index) => {
                        return (                          
                            <TouchableOpacity style={ styles.item } onPress={ () => changeLanguage(item) }>
                              <Image
                                style={styles.flag}
                                source={item.image}               
                              />
                            </TouchableOpacity>
                        );
                    })
                  }
                  </ScrollView>
              </View> 
          : <></>
        }
      </View>
    );
};

export default AvenLangDropDown;

const styles = StyleSheet.create({
    button: {
       width: 80,
       height: 50,
       borderWidth: 2,
       borderColor: Colors.LIGHT_GREEN,
       borderRadius: 10,

       alignItems: "center",
       justifyContent: "center",
    },

    dropdown: {
       marginTop: 5,
       
       width: 80,
       height: 403,
       borderWidth: 2,
       borderColor: Colors.LIGHT_GREEN,
       borderRadius: 10,
    },
    scroll: {
        // borderWidth: 1,
        showsVerticalScrollIndicator: true,
    },
    item : {
       width: 80,
       height: 50,
       borderBottomWidth: 1,
       borderColor: Colors.LIGHT_GREEN,
       borderOpacity: 0.5,
       alignItems: "center",
       justifyContent: "center",
       // borderWidth: 1,
    },
    flag: {
      width: 50,
      height: 35
    }
});
