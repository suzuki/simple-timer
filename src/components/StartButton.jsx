var React = require('react');

var StartButton = React.createClass({
  getDefaultProps: function() {
    return {
      DateObject: Date
    };
  },
  getInitialState: function() {
    return {
      startEpoch: (new this.props.DateObject()).getTime()
    };
  },
  handleClick: function(e) {
    e.preventDefault();

    var newEpoch = (new this.props.DateObject()).getTime();
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
