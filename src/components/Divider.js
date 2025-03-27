import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../assets/colors/Colors';

export default function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: colors.divider,
    marginVertical: 8,
  },
});
