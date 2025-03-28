import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/Colors';

const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primaryLighter,
  },
  containerAlldropdown: {
    paddingVertical: 20,
  },
  titleScreen: {
    padding: 20,
    backgroundColor: colors.white,
    elevation: 20,
    shadowColor: colors.primaryDark,
  },
  containerDropdown: {
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 6,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderColor: colors.primaryLighter,
    borderWidth: 1,
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
    backgroundColor: colors.white,
    borderRadius: 20,
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
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 4,
    marginRight: 20,
  },
  buttonToTopDisable: {
    padding: 8,
    borderRadius: 4,
    marginRight: 20,
    borderWidth: 1,
    borderColor: colors.primaryLight,
  },
  pinAndOpen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noJokesInfo: {
    marginTop: 20,
    textAlign: 'center',
  },
});
