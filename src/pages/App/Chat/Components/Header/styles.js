import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: '10%',
    backgroundColor: COLORS.SECONDARY,
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: '10%',
    flexDirection: 'row',
    flex: 1,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginLeft: 5,
  },
  contentText: {
    justifyContent: 'center',
    marginLeft: '5%',
  },
});

export default styles;
