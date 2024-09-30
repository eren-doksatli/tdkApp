import {ImageBackground} from 'react-native';
import Box from './box';
import bg from '../images/bg.jpg';
import * as React from 'react';

function Bg({children, ...props}) {
  return (
    <Box
      as={ImageBackground}
      source={bg}
      style={{
        width: '100%',
        height: '100%',
      }}
      {...props}>
      {children}
    </Box>
  );
}

export default Bg;
