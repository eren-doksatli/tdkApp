import {View, Text, TouchableOpacity} from 'react-native';
import Button from './button';
import {Archive, ArrowRotateLeft, SearchNormal1} from 'iconsax-react-native';
import Box from './box';
import theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  return (
    <Box
      pb={20}
      bg="white"
      flexDirection="row"
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <SearchNormal1 size="25" color="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={40}
            flex={1}
            onPress={onPress}>
            {label === 'History' && (
              <ArrowRotateLeft
                size="28"
                color={isFocused ? theme.colors.red : theme.colors.gray}
              />
            )}
            {label === 'Favorite' && (
              <Archive
                size="28"
                color={isFocused ? theme.colors.red : theme.colors.gray}
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius="full"
            />
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
