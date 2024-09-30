import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SimpleCardContainer, SimpleCardTitle} from './simple-card';
import theme from '../utils/theme';
import Box from './box';

export default function SearchHistoryList({data}) {
  return (
    <FlatList
      style={{padding: 16}}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Box py={6}>
          <SimpleCardContainer>
            <SimpleCardTitle>{item.title}</SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
      ListHeaderComponent={
        <Text style={{color: theme.colors.textLight, marginBottom: 10}}>
          Son Aramalar
        </Text>
      }
    />
  );
}
