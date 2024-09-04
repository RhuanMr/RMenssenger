import {StyleSheet} from 'react-native';
import COLORS from '../../../../../../../styles/colors';

const styles = StyleSheet.create({
  TextField: {
    color: COLORS.SECONDARY,
    paddingLeft: '5%',
    height: 60,
  },
  container: {
    borderBottomColor: COLORS.SECONDARY,
    borderBottomWidth: 1,
    width: '90%',
  },
});

export default styles;
