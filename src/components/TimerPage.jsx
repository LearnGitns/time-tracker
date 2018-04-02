import React from 'react'
import { connect } from 'react-redux'

import Timer from './Timer'

class TimerPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1,
    }
  }
  renderTimers() {
    const timers = this.props.timers.map((timer, index) => {
      return (
        <Timer timer={timer} index={index} key={`${index}${timer.name}`} />
      )
    })
    return timers
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '265px' }}>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around' }}>
          <h3 style={{ display: 'inline' }}>Your Timers</h3>
          <button className="btn btn-primary">
            <i className="icon icon-plus" />
          </button>
        </div>
        <ul className="tab tab-block">
          {/* Binary active tab status because there are only two */}
          <li className={`tab-item ${this.state.activeTab ? 'active' : ''}`}>
            <a onClick={() => this.setState({ activeTab: !this.state.activeTab })}>All Timers</a>
          </li>
          <li className={`tab-item ${this.state.activeTab ? '' : 'active'}`}>
            <a onClick={() => this.setState({ activeTab: !this.state.activeTab })}>By Project</a>
          </li>
        </ul>
        { this.state.activeTab ?
        <div style={{ overflowY: 'auto', height: '205px', width: '99%' }}>
          {this.renderTimers()}
        </div>
        :
        <div style={{ overflowY: 'auto', height: '205px', width: '99%' }}>
          <p style={{ marginTop: '30px' }}>No Projects yet :(</p>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timers: state.timers
  }
}

export default connect(mapStateToProps)(TimerPage)
