import {Text} from 'react-native';
import React from 'react';
import Box from './box';
import theme from '../utils/theme';
import Button from './button';

export function SimpleCardContainer({children, ...props}) {
  return (
    <Button
      justifyContent="flex-start"
      bg="white"
      borderRadius="normal"
      p={16}
      {...props}>
      {children}
    </Button>
  );
}

export function SimpleCardTitle({children}) {
  return <Text style={{fontSize: 16, fontWeight: 'bold'}}>{children}</Text>;
}
