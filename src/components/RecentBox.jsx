/**
 * RecentBox.jsx
 */
var React = require('react');

var RecentBox = React.createClass({
  getDefaultProps: function() {
    return {
      recent: {
        start: null,
        stop: null
      }
    };
  },
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

module.exports = RecentBox;
