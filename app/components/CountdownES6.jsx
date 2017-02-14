const React = require('react')
const Clock = require('Clock')
const CountdownForm = require('CountdownForm')

class CountdownES6 extends React.Component {
    constructor (props) {
        super(props)

        // Set up initial state
        this.state = {
            count: 0
        }
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds
        })
    }

    render() {
        let {count} = this.state
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
            </div>
        )
    }
}

module.exports = CountdownES6
