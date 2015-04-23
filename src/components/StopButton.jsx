var React = require('react');
var Clock = require('../Clock.js');

var StopButton = React.createClass({
  getDefaultProps: function() {
    return {
      clock: new Clock()
    };
  },
  getInitialState: function() {
    return {
      stopEpoch: this.props.clock.getTime()
    };
  },
  handleClick: function(e) {
    e.preventDefault();

    var newEpoch = this.props.clock.getTime();
    this.setState({stopEpoch: newEpoch});
    this.props.onStopClick(newEpoch);

    return;
  },
  render: function() {
    return (
      <button className="stopButton" ref="stop-button" onClick={this.handleClick}>Stop</button>
    );
  }
});

module.exports = StopButton;
