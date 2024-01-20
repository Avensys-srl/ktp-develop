import {Pressable, StyleSheet, Text, View, Dimensions, Image,TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';
import CustomStyles from '../styles/CustomStyles';
import {ImageSource} from '../common/imageSource';

const AvenTrippleBtn = ({TBL, TBC, TBR, TbL, TbC, TbR, readOnly}) => {
  const [firstContainer, setFirstContainer] = useState(Colors.WHITE);
  const [secondContainer, setSecondContainer] = useState(Colors.WHITE);
  const [thirdContainer, setThirdContainer] = useState(Colors.WHITE);

  useEffect(() => {
    if (TBL === 1) {
      setFirstContainer(Colors.LIGHT_GREEN);
      setSecondContainer(Colors.WHITE);
      setThirdContainer(Colors.WHITE);
    } else if (TBC === 1) {
      setFirstContainer(Colors.WHITE);
      setSecondContainer(Colors.LIGHT_GREEN);
      setThirdContainer(Colors.WHITE);
    } else if (TBR === 1) {
      setFirstContainer(Colors.WHITE);
      setSecondContainer(Colors.WHITE);
      setThirdContainer(Colors.LIGHT_GREEN);
    }
  }, [TBL, TBC, TBR]);

  const {mainContainer, btnContainerOuter, btnContainer} =
    componentStyle.TrippleBtn;
  
  const showLock = readOnly ? 0 : 1;
  const [locked, setLocked] = useState(false);
  const changeImg = () => {
    console.log("change image");
    setLocked(!locked);
  }

  return (
    <View style={mainContainer}>
          <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Pressable
              
              onPress={() => {
                if(locked) return;
                setFirstContainer(Colors.LIGHT_GREEN),
                setSecondContainer(Colors.WHITE),
                setThirdContainer(Colors.WHITE)
              }}>
              <View style={btnContainerOuter}>
                <View style={[btnContainer, {backgroundColor: `${firstContainer}`}]}>
                  <Text style={CustomStyles.ComponentTitlesBlack}>{TbL}</Text>
                </View>
              </View>
            </Pressable>
             {
              showLock? <>
                  {
                    locked ? 
                      <TouchableOpacity  style={styles.rightTitle} onPress={ () => changeImg() }>
                          <Image
                            style={styles.image}
                          source={ImageSource.lock}               
                          />
                      </TouchableOpacity > : 
                       <TouchableOpacity  style={styles.rightTitle} onPress={ () => changeImg() }>
                          <Image
                            style={styles.image}
                          source={ImageSource.lockOpen}               
                          />
                      </TouchableOpacity >
                  }

              </>
              : <></>
            }
          </View>
          <Pressable
            onPress={() => {
              if(locked) return;
              setFirstContainer(Colors.WHITE),
              setSecondContainer(Colors.LIGHT_GREEN),
              setThirdContainer(Colors.WHITE)
            }}>
            <View style={btnContainerOuter}>
              <View style={[btnContainer, {backgroundColor: `${secondContainer}`}]}>
                <Text style={CustomStyles.ComponentTitlesBlack}>{TbC}</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              if(locked) return;
              setFirstContainer(Colors.WHITE),
              setSecondContainer(Colors.WHITE),
              setThirdContainer(Colors.LIGHT_GREEN)
            }}>
            <View style={btnContainerOuter}>
              <View style={[btnContainer, {backgroundColor: `${thirdContainer}`}]}>
                <Text style={CustomStyles.ComponentTitlesBlack}>{TbR}</Text>
              </View>
            </View>
          </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
      width: 30,
      height: 30,
      // marginTop: 8,
      // borderWidth: 1,
    },
    rightTitle:{
      position: 'absolute',
      marginTop: 2,
      left: Sizing.screenWidth > 430 ? 100 + (32.5 - 15) : Sizing.vw * 25 + (Sizing.vw * 3.75 - 15),
      // borderWidth: 1,
    },
});

export default AvenTrippleBtn;
