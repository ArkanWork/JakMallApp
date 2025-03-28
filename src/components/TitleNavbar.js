import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Typography from './Typography';
import FastImage from 'react-native-fast-image';
import colors from '../assets/colors/Colors';

export default function TitleNavbar({buttonBack, title, color}) {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundNavtitle.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.containerTitle}>
        {buttonBack && (
          <TouchableOpacity>
            <FastImage
              source={require('../assets/icons/arrow-back.png')}
              style={styles.buttonBack}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <Typography variant="title" color={color}>
          {title}
        </Typography>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 64,
  },
  buttonBack: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 20,
    backgroundColor: colors.background,
  },
  backgroundImage: {
    height: 'auto',
    width: '100%',
  },
});
