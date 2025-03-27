import {View, Text} from 'react-native';
import React from 'react';
import TitleNavbar from '../../components/TitleNavbar';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import Typography from '../../components/Typography';

export default function HomeScreen() {
  return (
    <View>
      <TitleNavbar buttonBack={true} title="This is Navbar" />
      <Typography
        variant="subtitle"
        color="success"
        style={{
          textAlign: 'center',
          marginTop: '80%',
        }}>
        Start Your Project Here!
      </Typography>
    </View>
  );
}
