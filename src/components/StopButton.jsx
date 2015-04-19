var React = require('react');

var StopButton = React.createClass({
  getDefaultProps: function() {
    return {
      date: new Date()
    };
  },
  getInitialState: function() {
    return {
      stopEpoch: this.props.date.getTime()
    };
  },
  handleClick: function(e) {
    e.preventDefault();
    this.props.onStopClick(this.state.stopEpoch);

    return;
  },
  render: function() {
    return (
      <button className="stopButton" ref="stop-button" onClick={this.handleClick}>Stop</button>
    );
  }
});

module.exports = StopButton;
