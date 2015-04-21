var React = require('react');

var StopButton = React.createClass({
  getDefaultProps: function() {
    return {
      DateObject: Date
    };
  },
  getInitialState: function() {
    return {
      stopEpoch: (new this.props.DateObject()).getTime()
    };
  },
  handleClick: function(e) {
    e.preventDefault();

    var newEpoch = (new this.props.DateObject()).getTime();
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
