/**
 * StopButton.spec.js
 */
/*global jest */
jest.dontMock('../StopButton.jsx');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

var StopButton = require('../StopButton.jsx');

describe('StopButton', function() {
  beforeEach(function() {
    this.time = 1429453037035;
    this.mockCallback = jest.genMockFunction();
    var mockClock = {
        getTime: jest.genMockFunction().mockReturnValue(this.time)
    };

    this.stopButton = TestUtils.renderIntoDocument(
      <StopButton onStopClick={this.mockCallback} clock={mockClock} />
    );
  });

  it('StopButton has Stop text', function() {
    expect(this.stopButton.getDOMNode().textContent).toEqual('Stop');
  });

  it('When StopButton clicked, call callback function', function() {
    var node = this.stopButton.getDOMNode();
    Simulate.click(node);

    expect(this.mockCallback).toBeCalledWith(this.time);
  });
});
