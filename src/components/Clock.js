import React, { Component } from 'react'
import AccessTime from 'material-ui/svg-icons/device/access-time'
import { cyan600 } from 'material-ui/styles/colors'

import InfoBox from './InfoBox'

export default class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 60000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <InfoBox
        Icon={AccessTime}
        color={cyan600}
        value={this.state.date.toLocaleTimeString('es-CL')}
        title={this.state.date.toLocaleDateString('es-CL')}
      />
    )
  }
}
