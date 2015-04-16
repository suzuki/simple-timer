var React = require('react');

var StopButton = React.createClass({
  handleClick: function(e) {
    e.preventDefault();

    var stopEpoch = (new Date()).getTime();
    this.props.onStopClick(stopEpoch);

    return;
  },
  render: function() {
    return (
      <button className="stopButton" ref="stop-button" onClick={this.handleClick}>Stop</button>
    );
  }
});

module.exports = StopButton;
