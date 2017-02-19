const React = require('react')
const Clock = require('Clock')
const Controls = require('Controls')

class Timer extends React.Component {
    // ES7 method
    // Set up initial state
    state = {
        count: 0,
        timerStatus: 'stopped'
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer()
                    break
                case 'stopped':
                    this.setState({count: 0})
                    // falls through
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined
                    break
            }
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    handleStatusChange = (newTimerStatus) => {
        this.setState({
            timerStatus: newTimerStatus
        })
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    render () {
        let {count, timerStatus} = this.state
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        )
    }
}

module.exports = Timer
