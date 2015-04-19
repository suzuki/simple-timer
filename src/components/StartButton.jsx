var React = require('react');

var StartButton = React.createClass({
  getDefaultProps: function() {
    return {
      date: new Date()
    };
  },
  getInitialState: function() {
    return {
      startEpoch: this.props.date.getTime()
    };
  },
  handleClick: function(e) {
    e.preventDefault();
    this.props.onStartClick(this.state.startEpoch);

    return;
  },
  render: function() {
    return (
      <button className="startButton" ref="start-button" onClick={this.handleClick}>Start</button>
    );
  }
});

module.exports = StartButton;
