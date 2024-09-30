import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchView from './views/search';
import HistoryView from './views/history';
import FavoriteView from './views/favorite';
import DetailView from './views/detail';
import TabBar from './components/tab-bar';
import Box from './components/box';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {More} from 'iconsax-react-native';

const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Searchh"
        component={SearchView}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({route, navigation}) => ({
          headerTintColor: 'black',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: route.params?.title,
          headerStyle: {
            backgroundColor: theme.colors.softRed,
          },
          headerRight: () => (
            <TouchableOpacity>
              <More
                onPress={() => navigation.navigate('Searchh')}
                size="31"
                color={theme.colors.textDark}
                style={{marginBottom: 3}}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Search"
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
