const React = require('react')
const Clock = require('Clock')
const CountdownForm = require('CountdownForm')
const Controls = require('Controls')

class CountdownES6 extends React.Component {
    constructor (props) {
        super(props)

        // Set up initial state
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        })
    }

    render() {
        let {count} = this.state
        return (
            <div>
                <Clock totalSeconds={count} />
                <Controls countdownStatus="stopped" />
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
            </div>
        )
    }
}

module.exports = CountdownES6
