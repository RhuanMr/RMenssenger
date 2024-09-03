import {Button, StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    backgroundColor: COLORS.SECONDARY,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '4%',
  },
  chatInput: {
    width: '85%',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    height: 36,
    borderRadius: 36,
  },
  textInputArea: {
    marginLeft: 18,
  },
  sendButton: {
    height: 36,
    width: 36,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});

export default styles;
