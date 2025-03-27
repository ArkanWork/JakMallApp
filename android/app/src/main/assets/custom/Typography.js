import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

export default function Typography({variant, children, style, ...props}) {
  return (
    <Text style={[styles[variant], style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  hero: {
    fontSize: RFValue(20),
    lineHeight: 20 * 1.6,
    fontFamily: 'Poppins-Bold',
  },
  title: {
    fontSize: RFValue(16),
    lineHeight: 16 * 1.6,
    fontFamily: 'Poppins-Bold',
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
    fontSize: RFValue(11),
    lineHeight: 11 * 1.6,
    fontFamily: 'Poppins-Regular',
  },
  bodyM: {
    fontSize: RFValue(10),
    lineHeight: 10 * 1.6,
    fontFamily: 'Poppins-Regular',
  },
  bodyS: {
    fontSize: RFValue(9),
    lineHeight: 9 * 1.6,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    fontSize: RFValue(11),
    lineHeight: 11 * 1.6,
    fontFamily: 'Poppins-SemiBold',
  },
});
