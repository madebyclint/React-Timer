const React = require('react')

class TimerControls extends React.Component {

    // // ES7 Initializer method
    // static propTypes = {
    //     countdownStatus: React.PropTypes.string.isRequired,
    //     onStatusChange: React.PropTypes.func.isRequired
    // }

    // // ES7 Initializer method using arrow function
    onStatusChange = (newStatus) => {
        return () => {
            this.props.onStatusChange(newStatus)
        }
    }

    // componentWillReceiveProps = (newProps) => {
    //     console.log('componentWillReceiveProps', newProps.countdownStatus)
    // }

    render () {
        const {timerStatus} = this.props
        console.log(timerStatus)
        let renderStartStopButton = () => {
            console.log(timerStatus)
            if (timerStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (timerStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Continue</button>
            } else if (timerStatus === 'stopped') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
}

// ES6 Method
// Controls.propTypes = {
//     countdownStatus: React.PropTypes.string.isRequired
// }

module.exports = TimerControls
