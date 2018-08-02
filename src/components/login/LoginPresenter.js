import React, { Component } from 'react'

export default class LoginPresenter extends Component {
  render() {
    const { password, username } = this.props
    const { handlePasswordChange, handleUsernameChange } = this.props
    return (
      <div style={{ width: '40%', margin: '0 auto', padding: 15 }}>
        <form action="">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" value={username} onChange={handleUsernameChange} />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" value={password} onChange={handlePasswordChange} />
          <div style={{ textAlign: 'center' }}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}