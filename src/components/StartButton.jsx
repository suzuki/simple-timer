var React = require('react');
var Clock = require('../Clock.js');

var StartButton = React.createClass({
  getDefaultProps: function() {
    clock: new Clock()
  },
  getInitialState: function() {
    return {
      startEpoch: this.props.clock.getTime()
    };
  },
  handleClick: function(e) {
    e.preventDefault();

    var newEpoch = this.props.clock.getTime();
    this.setState({startEpoch: newEpoch});
    this.props.onStartClick(newEpoch);

    return;
  },
  render: function() {
    return (
      <button className="startButton" ref="start-button" onClick={this.handleClick}>Start</button>
    );
  }
});

module.exports = StartButton;
