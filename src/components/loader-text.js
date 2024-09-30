import {View, Text} from 'react-native';
import React from 'react';
import Box from './box';

export function LoaderText({...props}) {
  return <Box bg="light" width={120} height={16} {...props}></Box>;
}
