import React, { Component } from 'react'
import moment from 'moment'
import DashboardPresenter from './DashboardPresenter'

export default class DashboardContainer extends Component {
  componentWillMount() {
    const date = new Date()
    this.setState({
      date,
    })
    
    this.onCheckIn = this.onCheckIn.bind(this)
  }

  onCheckIn() {
    const checkInTime = new Date()
    this.setState({
      checkInTime: checkInTime,
    })
    console.log(moment(checkInTime).format('LT'))
  }

  render() {
    const { date } = this.state
    return <DashboardPresenter date={date} onCheckIn={this.onCheckIn} />
  }
}

