import { StyleSheet, Dimensions } from 'react-native'

var { height, width } = Dimensions.get('window');
var paddingTopNum = height * 0.1;

const timerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: paddingTopNum,
    width: '100%',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export { timerStyles, height, width, paddingTopNum }