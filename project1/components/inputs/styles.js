import { StyleSheet } from 'react-native'

const inputsStyles = StyleSheet.create({
  count: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  inputLinesContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 5,
  },
  inputRow: {
    flexDirection: 'row',
    padding: 5,
  },
  rowTitle: {
    flex: 1,
    padding: 5,
    fontWeight: 'bold',
  },
  inputTitle: {
    flex: 1,
    padding: 8,
  },
  inputMinutes: {
    flex: 2,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    height: '80%',
    width: '30%',
  },
  inputSeconds: {
    flex: 2,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    height: '80%',
    width: '30%',
  }
})

export { inputsStyles }
