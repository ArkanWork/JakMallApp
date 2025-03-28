import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/Colors';

const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleScreen: {
    padding: 20,
    backgroundColor: colors.white,
    elevation: 2,
    shadowColor: colors.success,
  },
  containerDropdown: {
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  titleDropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconDropdown: {
    width: 24,
    height: 24,
  },
  containerIcon: {
    backgroundColor: colors.divider,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primaryLight,
  },
  containerJokes: {
    backgroundColor: colors.white,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.primaryLight,
    marginTop: 12,
    borderRadius: 4,
  },
  buttonAddJokes: {
    marginTop: 12,
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonToTopDefault: {
    backgroundColor: colors.secondary,
    padding: 8,
    borderRadius: 4,
    marginRight: 20,
  },
  buttonToTopDisable: {
    backgroundColor: colors.info,
    padding: 8,
    borderRadius: 4,
    marginRight: 20,
  },
  pinAndOpen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
