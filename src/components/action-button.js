import {View, Text} from 'react-native';
import React from 'react';
import Button from './button';
import theme from '../utils/theme';

function ActionButton({children, ...props}) {
  return (
    <Button
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      }}
      bg="white"
      height="actionButton"
      minWidth="actionButton"
      borderRadius="full"
      px={8}
      {...props}>
      {children}
    </Button>
  );
}

export function ActionButtonTitle({children, ...props}) {
  return (
    <Text
      style={{
        color: theme.colors.textLight,
        marginRight: 8,
        marginLeft: 8,
        fontWeight: 'bold',
      }}
      {...props}>
      {children}
    </Text>
  );
}

export default ActionButton;
