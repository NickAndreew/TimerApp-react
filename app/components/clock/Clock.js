import React from 'react';
import { clockStyles } from './styles';
import { Text, View } from 'react-native';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  prepareTime = (number) => {
    if (this.parseNumber(number) < 10) {
      return '0' + number;
    } else {
      return '' + number;
    }
  };

  parseNumber = (number) => {
    if (number instanceof Number) {
      return number;
    } else {
      return Number(number);
    }
  };

  render() {
    return (
      <View style={clockStyles.timerView} 
        key={this.prepareTime(this.props.minutes) + ':' + this.prepareTime(this.props.seconds)}>
        
        <Text style={clockStyles.count}>{this.props.timerTitle}</Text>
        <Text style={clockStyles.count}>
          { this.prepareTime(this.props.minutes) + ':' + this.prepareTime(this.props.seconds) }
        </Text>
      </View>
    );
  }
}

export { Clock }
