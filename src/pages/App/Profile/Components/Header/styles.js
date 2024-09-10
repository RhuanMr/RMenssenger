import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: '10%',
    flexDirection: 'row',
    borderBottomColor: COLORS.SECONDARY,
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginLeft: '8%',
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
