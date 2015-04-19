/**
 * Timer.spec.js
 */

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../Timer.jsx');
var Timer = require('../Timer.jsx');

describe('Timer', function() {
  beforeEach(function() {
    this.timer = TestUtils.renderIntoDocument(
      <Timer />
    );
  });

  // TODO: write test !!
  it('dummy', function() {
  });
});
