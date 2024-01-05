import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import * as Progress from 'react-native-progress';
import {Colors, Sizing} from '../styles';
import componentStyle from '../styles/componentStyle';

export const CountdownProgressBar = ({label, min_val, max_val, init_val}) => {
  const [progress, setProgress] = useState(init_val);

  const mv = min_val;
  const Xv = max_val;
  const rv = label;

  const handleSliderChange = values => {
    const newProgress = values[0] / (Sizing.vw * 90 - Sizing.vw * 14);
    setProgress(newProgress);
  };

  const circlePosition = progress * (Sizing.vw * 90 - Sizing.vw * 12);

  const {mainContainer, valueContainer, textContainer, barContainer} =
    componentStyle.CountdownProgressBar;
  const {componentTitle} = componentStyle.commonStyles;

  return (
    <View style={mainContainer}>
      <View style={valueContainer}>
        <Text style={[componentTitle, {marginRight: 8}]}>{rv}</Text>
        <Text style={[componentTitle]}>
          {`${Math.round(progress * (max_val - min_val) + min_val)}`}
        </Text>
      </View>

      <View style={barContainer}>
        <MultiSlider
          values={[circlePosition]}
          sliderLength={Sizing.vw * 90 - Sizing.vw * 2}
          onValuesChange={handleSliderChange}
          min={0}
          max={Sizing.vw * 90 - Sizing.vw * 14}
          step={1}
          allowOverlap
          snapped
          markerStyle={{
            backgroundColor: 'transparent',
            height: Sizing.vh * 3.5,
          }}
          selectedStyle={{
            backgroundColor: Colors.LIGHT_GREEN,
            height: Sizing.vh * 3.5,
            top: -Sizing.vh * 0.85,
            borderRadius: 20,
          }}
          unselectedStyle={{
            backgroundColor: Colors.WHITE,
          }}
        />
        <View style={textContainer}>
          <Text style={componentTitle}>{mv}</Text>
          <Text style={componentTitle}>{Xv}</Text>
        </View>
      </View>
    </View>
  );
};

