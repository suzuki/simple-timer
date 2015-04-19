/**
 * RecentBox.spec.js
 */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../RecentBox.jsx');
var RecentBox = require('../RecentBox.jsx');

describe('RecentBox', function() {
  beforeEach(function() {
    this.expectRecent = {
      start: 1429453037035,
      stop: 1429453037040
    };

    this.recentBox = TestUtils.renderIntoDocument(
      <RecentBox recent={this.expectRecent}/>
    );
  });

  it('RecentBox has text "Recent"', function() {
    expect(this.recentBox.getDOMNode().textContent).toContain('Recent');
  });

  it('RecentBox has start and stop value', function() {
    var node = this.recentBox.getDOMNode();

    expect(node.textContent).toContain('Start: ' + this.expectRecent.start);
    expect(node.textContent).toContain('Stop: ' + this.expectRecent.stop);
  });
});
