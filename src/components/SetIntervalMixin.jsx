var SetIntervalMixin = {
  componentWillMount: function() {
    this.interval = [];
  },
  setInterval: function() {
    this.interval.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.interval.map(clearInterval);
  }
};

module.exports = SetIntervalMixin;
