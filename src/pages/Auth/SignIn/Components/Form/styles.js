import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '17%',
  },
  formButton: {
    alignSelf: 'center',
    height: 65,
    marginTop: '15%',
    width: '80%',
    backgroundColor: COLORS.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.TEXT,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  textField: {
    backgroundColor: COLORS.SECONDARY,
    height: 75,
    alignItems: 'center',
    borderRadius: 10,
    color: COLORS.TEXT,
    fontSize: 20,
    marginBottom: '10%',
  },
});

export default styles;
