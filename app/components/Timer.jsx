const React = require('react')
const Clock = require('Clock')
const TimerControls = require('TimerControls')

class Timer extends React.Component {
    // ES7 method
    // Set up initial state
    state = {
        count: 0,
        timerStatus: 'stopped'
    }

    render () {
        let {timerStatus} = this.state
        let renderControlArea = () => {
            if (timerStatus !== 'stopped') {
                return <TimerControls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            } else {
                return <TimerControls timerStatus={timerStatus} />
            }
        }
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={62} />
                {renderControlArea()}
            </div>
        )
    }
}

module.exports = Timer
