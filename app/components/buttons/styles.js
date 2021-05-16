import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: '9%',
    padding: 10
  },
  buttonStyle1: {
    flex: 1,
    textAlign: 'center',
    paddingLeft: 10,
  },
  buttonStyle2: {
    flex: 1,
    textAlign: 'center',
    paddingRight: 10,
  }
})

export { styles }