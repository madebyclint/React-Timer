var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        // Only one parent container can go here - so one div
        <div>
            <div>
                <div>
                    <Nav/>
                    <p>Main.jsx Rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;