/**
 * StartButton.spec.js
 */
/*global jest, jasmine:true */
jest.dontMock('../StartButton.jsx');

var React = require('react/addons');
var StartButton = require('../StartButton.jsx');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

describe('StartButton', function() {
  it ('start button', function() {
    var time = 1429453037035;
    var mockDate = {
      getTime: jest.genMockFunction().mockReturnValue(time)
    };

    var mockCallback = jest.genMockFunction();
    var startButton = TestUtils.renderIntoDocument(
      <StartButton onStartClick={mockCallback} date={mockDate} />
    );

    expect(startButton.getDOMNode().textContent).toEqual('Start');

    var node = startButton.getDOMNode();
    Simulate.click(node);

    expect(mockCallback).toBeCalledWith(time);
  });
});
