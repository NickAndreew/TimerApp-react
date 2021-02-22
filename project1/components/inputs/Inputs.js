import React from 'react'
import { inputsStyles } from './styles'
import { TextInput, Text, View } from 'react-native'

class Inputs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={inputsStyles.inputLinesContainer}>
        <View style={inputsStyles.inputRow}>
          <Text style={inputsStyles.rowTitle}>Work Time:</Text>
          <Text style={inputsStyles.inputTitle}>Mins:</Text>
          <TextInput
            style={inputsStyles.inputMinutes}
            onChangeText={(text) => this.props.setMinutesForWork(text)}
            defaultValue={this.props.workMinutes} />
          <Text style={inputsStyles.inputTitle}>Secs:</Text>
          <TextInput
            style={inputsStyles.inputSeconds}
            onChangeText={(text) => this.props.setSecondsForWork(text)}
            defaultValue={this.props.workSeconds} />
        </View>
        <View style={inputsStyles.inputRow}>
          <Text style={inputsStyles.rowTitle}>Break Time:</Text>
          <Text style={inputsStyles.inputTitle}>Mins:</Text>
          <TextInput
            style={inputsStyles.inputMinutes}
            onChangeText={(text) => this.props.setMinutesForBreak(text)}
            defaultValue={this.props.breakMinutes} />
          <Text style={inputsStyles.inputTitle}>Secs:</Text>
          <TextInput
            style={inputsStyles.inputSeconds}
            onChangeText={(text) => this.props.setSecondsForBreak(text)}
            defaultValue={this.props.breakSeconds} />
        </View>
      </View>
    )
  }
}

export { Inputs }
