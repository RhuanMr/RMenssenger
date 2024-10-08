import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: '10%',
    flexDirection: 'row',
    borderBottomColor: COLORS.SECONDARY,
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
