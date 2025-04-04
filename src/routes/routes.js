import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Typography from '../components/Typography';
import colors from '../assets/colors/Colors';

import HomeScreen from '../screens/Home/Index';
import SplashScreen from '../screens/Splash/Index';

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          justifyContent: 'center',
          paddingTop: 24,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <FastImage
                source={require('../assets/icons/arrow-back.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  opacity: focused ? 1 : 0.36,
                }}
              />
              <Typography
                variant={'bodyS'}
                style={{
                  color: colors.primary,
                  opacity: focused ? 1 : 0.5,
                  width: '100%',
                  marginTop: 8,
                }}>
                Home
              </Typography>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
