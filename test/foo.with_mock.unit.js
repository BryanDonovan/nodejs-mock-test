var assert = require('assert');
var mockery = require('mockery');

var mock_widget = {
    get_widget: function() {
        return 'mocked widget';
    }
};

var foo;

describe("foo.js - with mock", function() {
    before(function() {
        mockery.enable();
        mockery.registerMock('./widget', mock_widget);
        mockery.registerAllowable('../lib/foo');
        foo = require('../lib/foo');
    });

    after(function() {
        mockery.disable();
        mockery.deregisterAll();
    });

    it("returns mocked response", function(done) {
        var result = foo.get_widget();
        assert.equal(result, 'mocked widget');
        done();
    });
});
