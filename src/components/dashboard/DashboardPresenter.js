import React, { Component } from 'react'
import moment from 'moment'

export default class DashboardPresenter extends Component {


  render() {
    const { date } = this.props
    const { onCheckIn } = this.props

    return (
      <div>
        <h1>Hi n0pan!</h1>
        <p>Today's date is {moment(date).format('LL')}.</p>

        <button onClick={onCheckIn}>Check in</button>
      </div>
    )
  }
}