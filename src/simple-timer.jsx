/**
 * simple-timer.jsx
 */
var React = require('react');
var SetIntervalMixin = require('./components/SetIntervalMixin.jsx');
var StartButton = require('./components/StartButton.jsx');
var StopButton = require('./components/StartButton.jsx');

var Timer = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function() {
    var epoch = (new Date()).getTime();
    return {
      epoch: epoch
    };
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },
  tick: function() {
    var newEpoch = this.state.epoch + 1000;
    this.setState({epoch: newEpoch});
  },
  render: function() {
    var formatDate = function(d) {
      var year   = d.getFullYear();
      var month  = ('0' + d.getMonth()).slice(-2);
      var day    = ('0' + d.getDate()).slice(-2);
      var hour   = ('0' + d.getHours()).slice(-2);
      var minute = ('0' + d.getMinutes()).slice(-2);
      var second = ('0' + d.getSeconds()).slice(-2);

      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    };

    var d = new Date(this.state.epoch);
    var dateString = formatDate(d);

    return (
        <div className="timer">
          <h2>{dateString}</h2>
	</div>
    );
  }
});

var RecentBox = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Recent</h4>
        <span>Start: {this.props.recent.start}</span>
        |
        <span>Stop: {this.props.recent.stop}</span>
      </div>
    );
  }
});

var HistoryBox = React.createClass({
  render: function() {
    var historiesRender = this.props.histories.map(function(history) {
      return (
        <div>
          <span>Start: {history.start}</span>
          |
          <span>Stop: {history.stop}</span>
        </div>
      );
    });

    return (
      <div className="historyBox">
        <h4>Histories</h4>
        {historiesRender}
      </div>
    );
  }
});

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
