import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Typography from './Typography';
import colors from '../assets/colors/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

export default function TouchButton({
  size,
  variant,
  children,
  style,
  textStyle,
  ...props
}) {
  return (
    <TouchableOpacity style={[styles[size], styles[variant], style]} {...props}>
      <Typography style={[styles.text, styles[`${variant}Text`], textStyle]}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  full: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
    height: 48,
  },
  half: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    height: 48,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  ghost: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    fontSize: RFValue(11),
    lineHeight: 11 * 1.6,
    fontFamily: 'Poppins-SemiBold',
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.black,
  },
  ghostText: {
    color: colors.primary,
  },
});
