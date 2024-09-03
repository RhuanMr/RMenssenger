import {StyleSheet} from 'react-native';
import COLORS from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flex: 1,
    zIndex: 3,
    elevation: 3,
  },
  contentPage: {
    flex: 1,
  },
  containerWhite: {
    marginTop: 'auto',
    zIndex: 1,
    elevation: 1,
    width: '100%',
    height: '65%',
    backgroundColor: COLORS.SECONDARY,
  },
});

export default styles;
