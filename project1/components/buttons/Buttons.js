import React from 'react'
import { styles } from './styles'
import { View, Button } from 'react-native'

class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.buttonStyle1}
          title={this.props.action}
          onPress={() => this.props.toggleAction()} />
        <Button
          style={styles.buttonStyle2}
          title={'Reset'}
          onPress={() => this.props.resetButtonFunc()} />
      </View>
    )
  }
}

export { Buttons }
