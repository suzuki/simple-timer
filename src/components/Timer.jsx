/**
 * Timer.jsx
 */
var React = require('React');

var SetIntervalMixin = require('./SetIntervalMixin.jsx');

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

module.exports = Timer;
