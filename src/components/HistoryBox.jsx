/**
 * HistoryBox.jsx
 */
var React = require('react');

var HistoryBox = React.createClass({
  getDefaultProps: function() {
    return {
      histories: []
    };
  },
  render: function() {
    var counter = 0;
    var histories = this.props.histories;

    var historiesRender = this.props.histories.reverse().map(function(history) {
      return (
        <div key={counter++}>
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

module.exports = HistoryBox;
