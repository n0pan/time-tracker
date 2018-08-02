import React, { Component } from 'react'
import LoginPresenter from './LoginPresenter'

export default class LoginContainer extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    })
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    const { password, username } = this.state
    return <LoginPresenter password={password}
                           username={username}
                           handlePasswordChange={this.handlePasswordChange} 
                           handleUsernameChange={this.handleUsernameChange} />
  }
}
