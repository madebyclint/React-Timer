var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Timer.jsx</h2>
                <Clock totalSeconds={62}/>
            </div>
        )
    }
});

module.exports = Timer;