import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    justifyContent: 'center',
    height: 120,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.SECONDARY,
  },
  content: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginLeft: 5,
  },
  textContent: {
    marginLeft: 20,
  },
  infoContent: {
    flexDirection: 'row',
  },
  statusText: {
    fontSize: 20,
    marginLeft: '5%',
    color: COLORS.GREEN,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 16,
    color: COLORS.TEXT,
  },
});

export default styles;
