import {View, Text, Image, Modal, TouchableOpacity} from 'react-native'
import {Header, FilterCard, ToggleButton, Label} from '../../component'
import {ScaledSheet} from 'react-native-size-matters'
import {userType} from '../../configs'
import {useState, useRef} from 'react'
import {ImageSource} from '../../common/imageSource'

export const Filteration = () => {
  const [toggle, setToggle] = useState(false)
  const [visible, setVisible] = useState(false)
  const FilterLabel = [
    {
      title: 'Filter alarm activation',
      lock: false,
      toggleON: 'On',
      toggleOff: 'Off',
    },
    {title: 'Filter replaced ?', lock: true, toggleON: 'Yes', toggleOff: 'No'},
  ]

  const Threshold = () => {
    return (
      <>
        <Modal transparent={false} animationType='slide' visible={visible}>
          <View style={{paddingHorizontal: 10, flex: 1, alignItems: 'center'}}>
            <View style={styles.ModalContainer}></View>

            <TouchableOpacity
              onPress={() => {
                setVisible(!visible)
              }}>
              <Text>close modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </>
    )
  }

  return (
    <>
      <Header canGoBack={true} title='Filter' />
      <View style={styles.container}>
        {userType.technician &&
          FilterLabel.map(item => {
            return (
              <FilterCard
                title={item.title}
                lock={item.lock}
                toggleON={item.toggleON}
                toggleOff={item.toggleOff}
              />
            )
          })}
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={styles.text}>remaining duty [%]</Text>
          <View style={styles.progressBarOutline}>
            <View
              style={[styles.progressBarOutline, styles.progressBarInline]}
            />
          </View>
          {!userType.technician && (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.normalUser}>
                <View style={styles.toggleContainer}>
                  <ToggleButton
                    toggle={toggle}
                    onChange={() => {
                      setToggle(!toggle)
                    }}
                  />
                  <View style={styles.toggleLabel}>
            <Text>NO</Text>
            <Text>YES</Text>
          </View>
                </View>
                <Label style={{color: 'black'}}>Filter Replaced?</Label>
              </View>
            </View>
          )}
          <Text style={styles.callibrationText}>Start Calibration</Text>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible)
            }}>
            <Image
              source={ImageSource.callibration}
              style={styles.callibrationIcon}
            />
          </TouchableOpacity>
        </View>
        {/* {Threshold()} */}
      </View>
    </>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '10@ms',
  },
  progressBarOutline: {
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: '25@ms',
    borderRadius: '10@ms',
    marginVertical: '10@ms',
  },
  progressBarInline: {
    height: '24@ms',
    width: '20%',
    backgroundColor: 'green',
    marginVertical: 0,
  },
  text: {
    fontSize: '22@ms',
    color: 'black',
    textAlign: 'center',
  },
  normalUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: '20@ms',
  },
  callibrationIcon: {
    height: '60@ms',
    width: '60@ms',
    resizeMode: 'contain',
    tintColor: 'black',
    alignSelf: 'center',
  },
  callibrationText: {
    fontSize: '20@ms',
    color: 'black',
    textAlign: 'center',
  },
  toggleContainer: {
    height: '60@ms',
    width: '60@ms',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  toggleLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  //--------------------------Modal
  ModalContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: '100@ms',
    width: '100%',
    borderRadius: '5@ms',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5@ms',
    marginVertical: '10@ms',
  },
})
