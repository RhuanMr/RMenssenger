import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: '10%',
    borderBottomColor: COLORS.SECONDARY,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 36,
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default styles;
