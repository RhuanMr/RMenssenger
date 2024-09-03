import {StyleSheet} from 'react-native';
import COLORS from '../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '12%',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.SECONDARY,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 15,
    marginLeft: '5%',
    color: COLORS.GREEN,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 15,
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 10,
    color: COLORS.TEXT,
  },
});

export default styles;
