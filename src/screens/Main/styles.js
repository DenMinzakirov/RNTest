import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/constant';

export default StyleSheet.create({
  mainWrap: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE
  },
  text: {
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  inputContayner: {
    width: '80%',
    marginVertical: 20,
  },
  buttonContayner: {
    width: '80%',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: COLORS.BLUE
  },
});
