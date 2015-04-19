/**
 * StartButton.spec.js
 */
/*global jest, jasmine:true */
jest.dontMock('../StartButton.jsx');

describe('StartButton', function() {
  it ('dummy', function() {
    var React = require('react/addons');
    var StartButton = require('../StartButton.jsx');
    var TestUtils = React.addons.TestUtils;


    var startButton = TestUtils.renderIntoDocument(<StartButton />);

    expect(startButton.getDOMNode().textContent).toEqual('Start');
  });
});
