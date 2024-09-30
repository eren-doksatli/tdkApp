import {Text} from 'react-native';
import React from 'react';
import Box from './box';
import theme from '../utils/theme';
import Button from './button';

export function CardContainer({children, ...props}) {
  return (
    <Button bg="white" borderRadius="normal" py={16} px={12} {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  );
}

export function CardTitle({children}) {
  return <Text style={{fontSize: 18, fontWeight: 'bold'}}>{children}</Text>;
}

export function CardSummary({children}) {
  return (
    <Text style={{fontSize: 14, marginTop: 8, color: theme.colors.textMedium}}>
      {children}
    </Text>
  );
}
