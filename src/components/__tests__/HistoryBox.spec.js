/**
 * HistoryBox.spec.js
 */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../HistoryBox.jsx');
var HistoryBox = require('../HistoryBox.jsx');

describe('HistoryBox', function() {
  beforeEach(function() {
    this.expectHistories = [
      {start: 1429453037035, stop: 1429453037040}
    ];

    this.historyBox = TestUtils.renderIntoDocument(
      <HistoryBox histories={this.expectHistories} />
    );
  });

  it('HistoryBox has title "histories"', function() {
    expect(this.historyBox.getDOMNode().textContent).toContain('Histories');
  });

  it('HistoryBox has start and stop value', function() {
    var node = this.historyBox.getDOMNode();

    expect(node.textContent).toContain('Start: ' + this.expectHistories[0].start);
    expect(node.textContent).toContain('Stop: ' + this.expectHistories[0].stop);
  });
});
