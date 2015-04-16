/**
 * main.js
 */
var React = require('react');
var TimerBox = require('./simple-timer.jsx');

window.addEventListener('DOMContentLoaded', function() {
  React.render(
    <TimerBox />,
    document.getElementById('simple-timer')
  );
});
