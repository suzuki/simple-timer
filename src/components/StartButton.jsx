var React = require('react');

var StartButton = React.createClass({
  handleClick: function(e) {
    e.preventDefault();

    var startEpoch = (new Date()).getTime();
    this.props.onStartClick(startEpoch);

    return;
  },
  render: function() {
    return (
      <button className="startButton" ref="start-button" onClick={this.handleClick}>Start</button>
    );
  }
});

module.exports = StartButton;
