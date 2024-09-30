import {View, Text} from 'react-native';
import React from 'react';
import Box from '../components/box';
import {SafeAreaView} from 'react-native-safe-area-context';

function HistoryView() {
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>History!</Text>
    </Box>
  );
}

export default HistoryView;
