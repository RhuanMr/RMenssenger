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
    marginLeft: '8%',
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
  nameTitle: {
    fontSize: 18,
    color: COLORS.TEXT,
    fontWeight: 'bold',
  },
  statusTitle: {
    color: COLORS.GREEN,
    fontWeight: 'bold',
  },
  backButton: {
    marginLeft: '2%',
  },
});

export default styles;
