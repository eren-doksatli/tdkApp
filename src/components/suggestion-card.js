import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {CardContainer, CardSummary, CardTitle} from './card';
import Box from './box';
import theme from '../utils/theme';
import {LoaderText} from './loader-text';

export default function SuggestionCard({title, onPress, data, ...props}) {
  return (
    <Box {...props}>
      <Text style={{color: theme.colors.textLight}}>{title}</Text>
      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <Box>
            <LoaderText />
            <LoaderText width={200} mt={10} />
          </Box>
        )}
      </CardContainer>
    </Box>
  );
}
