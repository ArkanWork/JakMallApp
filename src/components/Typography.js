import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../assets/colors/Colors';

export default function Typography({
  variant,
  children,
  color,
  style,
  ...props
}) {
  return (
    <Text style={[styles[variant], {color: colors[color]}, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  hero: {
    fontSize: RFValue(20),
    lineHeight: 20 * 1.6,
    fontFamily: 'Poppins-SemiBold',
  },
  title: {
    fontSize: RFValue(16),
    lineHeight: 16 * 1.6,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: RFValue(14),
    lineHeight: 14 * 1.6,
    fontFamily: 'Poppins-Medium',
  },
  highlight: {
    fontSize: RFValue(13),
    lineHeight: 13 * 1.6,
    fontFamily: 'Poppins-Medium',
  },
  bodyL: {
    fontSize: RFValue(12),
    lineHeight: 12 * 1.6,
    fontFamily: 'Poppins-Regular',
  },
  bodyM: {
    fontSize: RFValue(11),
    lineHeight: 11 * 1.6,
    fontFamily: 'Poppins-Regular',
  },
  info: {
    fontSize: RFValue(10),
    lineHeight: 10 * 1.6,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    fontSize: RFValue(11),
    lineHeight: 11 * 1.6,
    fontFamily: 'Poppins-SemiBold',
  },
});
