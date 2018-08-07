import React, { Component } from 'react';
import LoginContainer from './components/login/LoginContainer'
import DashboardContainer from './components/dashboard/DashboardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: 0 }}>Time Tracker</h1>
          <p>Welcome to Time Tracker.</p>
          <p>Please login in order to begin tracking your time.</p>
        </div>
        <LoginContainer />
        <DashboardContainer />
      </div>
    );
  }
}

export default App;
