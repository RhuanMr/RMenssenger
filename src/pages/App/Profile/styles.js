import {StyleSheet} from 'react-native';
import COLORS from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  contentProfile: {
    alignItems: 'center',
  },
  contentInfo: {
    alignItems: 'center',
  },
  nameTitle: {
    marginTop: '5%',
    fontSize: 36,
    marginBottom: '2%',
    fontWeight: 'bold',
    color: COLORS.SECONDARY,
  },
  buttonLogout: {
    marginTop: '5%',
    backgroundColor: COLORS.SECONDARY,
    height: 50,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  titleButton: {
    color: COLORS.RED,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
