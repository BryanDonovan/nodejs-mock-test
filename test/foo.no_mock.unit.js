var assert = require('assert');
var mockery = require('mockery');
var foo = require('../lib/foo');

describe("foo.js - no mock", function() {
    before(function() {
        mockery.enable();
        mockery.registerAllowable('../lib/foo', true);
        foo = require('../lib/foo');
    });

    after(function() {
        mockery.disable();
        mockery.deregisterAll();
    });

    
    it("returns real response", function(done) {
        var result = foo.get_widget();
        assert.equal(result, 'real widget');
        done();
    });
});
