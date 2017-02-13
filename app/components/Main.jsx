var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        // Only one parent container can go here - so one div
        <div>
            <Nav/>
            <div className="row">
                <div className="small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;