import {View, Text, Image, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import Box from './box';
import Bg from './bg';
import Search from '../components/search';

export default function HomeSearch({isSearchFocus, onSearchFocus}) {
  const [heroHeight] = useState(new Animated.Value(200));

  useEffect(() => {
    Animated.timing(heroHeight, {
      toValue: isSearchFocus ? 84 : 200,
      duration: 320,
      useNativeDriver: false,
    }).start();
  }, [isSearchFocus, heroHeight]);

  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      {!isSearchFocus && (
        <Box mb={30}>
          <Bg>
            <Box
              flex={1}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../images/logo2.png')}
                style={{width: 95, height: 50}}
              />
            </Box>
          </Bg>
        </Box>
      )}

      <Box
        position="absolute"
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        p={16}
        width="100%">
        <Search onChangeFocus={status => onSearchFocus(status)} />
      </Box>
    </Box>
  );
}
