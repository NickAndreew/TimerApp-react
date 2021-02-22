import React from 'react'
import { vibrate } from './../../utils'
import { timerStyles } from './styles'
import { Clock } from '../clock/Clock'
import { Inputs } from '../inputs/Inputs'
import { Buttons } from '../buttons/Buttons'

import { View, Alert } from 'react-native'

class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      timerTitle: 'WORK TIMER',
      action: 'Start',
      active: false,
      time: 0,
      minutes: 25,
      seconds: 0,
      workMinutes: 25,
      workSeconds: 0,
      breakMinutes: 5,
      breakSeconds: 0,
    }

    this.toggleAction = this.toggleAction.bind(this);
    this.resetButtonFunc = this.resetButtonFunc.bind(this);
    this.setMinutesForWork = this.setMinutesForWork.bind(this);
    this.setSecondsForWork = this.setSecondsForWork.bind(this);
    this.setMinutesForBreak = this.setMinutesForBreak.bind(this);
    this.setSecondsForBreak = this.setSecondsForBreak.bind(this);

  }

  componentDidUpdate() {
    console.log('Timer updated! Count: ' + this.state.time);
  }

  ///////////////////////////////////////////////////////////
  //// SETTERS //////////////////////////////////////////////
  ///////////////////////////////////////////////////////////

  setMinutesForWork(text) {
    console.log('setMinutesforWork invoked!')
    if (this.state.timerTitle == 'WORK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          minutes: text,
          workMinutes: text
        });
      } else {
        this.setState({
          minutes: 0,
          workMinutes: 0
        });
      }
    } else if (this.state.timerTitle == 'BREAK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          workMinutes: text,
        });
      } else {
        this.setState({
          workMinutes: 0
        });
      }
    }    
  }

  setSecondsForWork(text) {
    console.log('setSecondsForWork invoked!')
    if (this.state.timerTitle == 'WORK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          seconds: text,
          workSeconds: text,
        });
      } else {
        this.setState({
          seconds: 0,
          workSeconds: 0
        });
      }
    } else if (this.state.timerTitle == 'BREAK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          workSeconds: text,
        });
      } else {
        this.setState({
          workSeconds: 0
        });
      }
    }
  }

  setMinutesForBreak(text) {
    console.log('setMinutesForBreak invoked!')
    if (this.state.timerTitle == 'WORK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          breakMinutes: text
        });
      } else {
        this.setState({
          breakMinutes: 0
        });
      }
    } else if (this.state.timerTitle == 'BREAK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          minutes: text,
          breakMinutes: text
        });
      } else {
        this.setState({
          minutes: 0,
          breakMinutes: 0
        });
      }
    }    
  }

  setSecondsForBreak(text) {
    console.log('setSecondsForBreak invoked!')
    if (this.state.timerTitle == 'WORK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          breakSeconds: text
        });
      } else {
        this.setState({
          breakSeconds: 0
        });
      }
    } else if (this.state.timerTitle == 'BREAK TIMER') {
      if (text != '' && parseInt(text, 10) > 0) {
        this.setState({
          seconds: text,
          breakSeconds: text,
        });
      } else {
        this.setState({
          seconds: 0,
          breakSeconds: 0
        });
      }
    }
  }

  //////////////////////////////////////////////////////////
  /// LOGICAL FUNCTIONS ////////////////////////////////////
  //////////////////////////////////////////////////////////

  setStartTimer() {
    console.log('setStartTimer invoked!')
    this.setState({
      action: 'Pause', 
      active: true 
    }, () => {
      this.timerOn();
    });
  }

  setPauseTimer() {
    console.log('setPauseTimer invoked!')
    this.setState({ 
      action: 'Start', 
      active: false 
    }, () => {
      this.timerOff()
    });
  }

  resetCounterForWork() {
    console.log('resetCounterForWork invoked!')
    this.timerOff();
    this.setState({
      action: 'Start',
      active: false,
      minutes: this.state.workMinutes,
      seconds: this.state.workSeconds
    });
  }
  
  resetCounterForBreak() {
    console.log('resetCounterForBreak invoked!')
    this.timerOff()
    this.setState({
      action: 'Start',
      active: false,
      minutes: this.state.breakMinutes,
      seconds: this.state.breakSeconds
    });
  }

  toggleAction() {
    console.log('toggleAction invoked!')
    if (this.state.minutes != 0 || this.state.seconds != 0) {
      if (this.state.action == 'Start') {
        this.setStartTimer();
      } else if (this.state.action == 'Pause') {
        this.setPauseTimer();
      } else {
        console.log('Some error in this.state.action');
      }
    } else {
      Alert.alert('Provide time number');
    }
  }

  resetButtonFunc() {
    console.log('resetButtonFunc invoked!')
    // check timer is runing or not
    if (!this.state.active) {
      this.resetCounter();
    } else {
      this.toggleAction();
      this.resetCounter();
    }
  }

  resetCounter() {
    console.log('resetCounter invoked!')
    if (this.state.timerTitle == 'WORK TIMER') {
      this.resetCounterForWork();
    } else if (this.state.timerTitle == 'BREAK TIMER') {
      this.resetCounterForBreak();
    } else {
      console.log("error : resetCounter -> timerTitle unknown title");
    }
  }

  timerCalling = () => {    
    console.log('timerCalling invoked!')
    vibrate()
    this.timerOff()
  }

  timerOn = () => {
    console.log('timerOn invoked!')
    if (
      this.parseNumber(this.state.seconds) != 0 ||
      this.parseNumber(this.state.minutes) != 0
    ) {
      this.interval = setInterval(this.decr, 1000)
      this.setState({
        active: true
      });
    }
  }

  timerOff = () => {
    console.log('timerOff invoked!')
    clearInterval(this.interval);
  }

  submitAndClear = () => {
    console.log('submitAndClear invoked!')
    this.setState({
      text: 0
    });
  }

  switchBreakOrWork() {
    console.log('switchBreakOrWork invoked!')
    this.timerOff();
    this.timerCalling();
    Alert.alert(
      "Timer",
      "Timer is over!",
      [
        {
          text: "Cancel Timer",
          onPress: () => {
            console.log("Cancel Pressed")
            this.resetCounterForWork()
          },
          style: "cancel"
        },
        {
          text: "Continue", 
          onPress: () => {
            console.log("OK Pressed")
            if (this.state.timerTitle == 'WORK TIMER') {
              this.setState({
                minutes: this.state.breakMinutes,
                seconds: this.state.breakSeconds,
                timerTitle: 'BREAK TIMER'
              }, () => {
                this.timerOn();
              });
            } else if (this.state.timerTitle == 'BREAK TIMER') {
              this.setState({
                minutes: this.state.workMinutes,
                seconds: this.state.workSeconds,
                timerTitle: 'WORK TIMER'
              }, () => {
                this.timerOn();
              });
            } 
          }
        }
      ],
      { cancelable: false }
    );  
  }

  decr = () => {
    console.log('decr! current minutes : ' + this.state.minutes + ', seconds : ' + this.state.seconds);
    if (this.parseNumber(this.state.seconds) > 0) {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1
      }));
    } else if (this.parseNumber(this.state.seconds) == 0) {
      if (this.parseNumber(this.state.minutes) == 0) {
        this.switchBreakOrWork();
      } else {
        this.setState((prevState) => ({
          minutes: prevState.minutes - 1,
          seconds: 59
        }));
      }
    }
  }

  prepareTime = (number) => {
    console.log('prepareTime invoked!')
    if (this.parseNumber(number) < 10) {
      return '0' + number
    } else {
      return '' + number
    }
  }

  parseNumber = (number) => {
    console.log('parseNumber invoked!')
    if (number instanceof Number) {
      return number
    } else {
      return Number(number)
    }
  }

  render() {
    return (
      <View style={timerStyles.container}>
        <View style={timerStyles.appContainer} >
          <Clock 
            timerTitle={this.state.timerTitle} 
            minutes={this.state.minutes} 
            seconds={this.state.seconds} />
          <Buttons 
            action={this.state.action}
            active={this.state.active}
            toggleAction={this.toggleAction}
            resetButtonFunc={this.resetButtonFunc} />
          <Inputs 
            workMinutes={this.state.workMinutes}
            workSeconds={this.state.workSeconds}
            breakMinutes={this.state.breakMinutes}
            breakSeconds={this.state.breakSeconds}
            setMinutesForWork={this.setMinutesForWork} 
            setSecondsForWork={this.setSecondsForWork} 
            setMinutesForBreak={this.setMinutesForBreak}
            setSecondsForBreak={this.setSecondsForBreak} />
        </ View>
      </ View>
    )
  }
}

export { Timer }
