import React, {FC} from 'react';
import {GradientProps} from './interface';
import LinearGradient from 'react-native-linear-gradient';

const Gradient: FC<GradientProps> = ({children}) => {
  return (
    <LinearGradient
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height:'80%',borderBottomLeftRadius:30,borderBottomRightRadius:30
      }}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 1}}
      locations={[0.5, 0.3, 0.5, 0]}
      colors={['#844434','#343c44','#565c64','#d55127']}>
      {children}
    </LinearGradient>
  );
};

export {Gradient};
