/**
 * StartButton.spec.js
 */
/*global jest, jasmine:true */
jest.dontMock('../StartButton.jsx');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

var StartButton = require('../StartButton.jsx');

describe('StartButton', function() {

  beforeEach(function() {
    this.time = 1429453037035;
    this.mockCallback = jest.genMockFunction();

    var self = this;
    this.MockDate = function() {
      return {
        getTime: function() {
          return self.time;
        }
      };
    };

    this.startButton = TestUtils.renderIntoDocument(
      <StartButton onStartClick={this.mockCallback} DateObject={this.MockDate} />
    );
  });

  it ('StartButton has Start text', function() {
    expect(this.startButton.getDOMNode().textContent).toEqual('Start');
  });

  it ('When StartButton clicked, call callback function', function() {
    var node = this.startButton.getDOMNode();
    Simulate.click(node);

    expect(this.mockCallback).toBeCalledWith(this.time);
  });
});
