import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});

export default styles;
