/**
 * simple-timer.jsx
 */
var React = require('react');
var StartButton = require('./components/StartButton.jsx');
var StopButton = require('./components/StopButton.jsx');
var RecentBox = require('./components/RecentBox.jsx');
var HistoryBox = require('./components/HistoryBox.jsx');
var Timer = require('./components/Timer.jsx');

var TimerBox = React.createClass({
  getInitialProps: function() {
    var work = 25 * 60 * 1000;
    var rest =  5 * 60 * 1000;
    return {
      work: work,
      rest: rest
    }
  },
  getInitialState: function() {
    return {
      recent: {
        start: null,
        stop: null
      },
      histories: []
    };
  },
  handleStart: function(startEpoch) {
    var newRecent = {
      start: startEpoch,
      stop: null
    };
    var newState = {
      recent: newRecent,
      histories: this.state.histories
    }
    this.setState(newState);
  },
  handleStop: function(stopEpoch) {
    var newRecent = {
      start: this.state.recent.start,
      stop: stopEpoch
    };
    var newHistories = this.state.histories;
    newHistories.push(newRecent);

    var newState = {
      recent: newRecent,
      histories: newHistories
    }
    this.setState(newState);
  },
  render: function() {
    return (
      <div className="timerBox">
        <Timer />
        <StartButton onStartClick={this.handleStart} />
        <StopButton onStopClick={this.handleStop} />
        <RecentBox recent={this.state.recent} />
        <HistoryBox histories={this.state.histories}/>
      </div>
    );
  }
});

module.exports = TimerBox;
