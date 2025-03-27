import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/Colors';

const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageLogo: {
    height: 40,
    width: 64,
  },
  iconMedium: {
    height: 48,
    width: 48,
  },
  containerLogoMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 32,
  },
  containerHomeBalance: {
    alignItems: 'center',
  },
  containerBalance: {
    marginHorizontal: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: width * 0.9,
  },
  infoSaldo: {
    color: colors.info,
    marginBottom: 4,
  },
  textBlack: {
    color: colors.black,
  },
  containerShortcut: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    width: width * 0.9,
    justifyContent: 'space-around',
    padding: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  iconShorcut: {
    height: 48,
    width: 48,
  },
  alignCenter: {
    alignItems: 'center',
  },
  textShortcut: {
    color: colors.white,
    marginTop: 8,
  },
  containerMenu: {
    marginVertical: 32,
  },
  rowMenu: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  textMenu: {
    color: colors.black,
    marginTop: 8,
  },
  titleSection: {
    color: colors.black,
    marginLeft: 20,
    marginBottom: 8,
  },
  scrollRow: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  bannerPromo: {
    width: 350,
    height: 150,
    marginHorizontal: 4,
  },
});
