import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  containerButton: {
    width: '100%',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  contentProfile: {
    alignItems: 'center',
  },
  contentInfo: {
    alignItems: 'center',
  },
  nameTitle: {
    fontSize: 40,
    marginBottom: '5%',
    color: COLORS.SECONDARY,
  },
});

export default styles;
