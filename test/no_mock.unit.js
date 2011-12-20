var assert = require('assert');
var foo = require('../lib/foo');

describe("no mock", function() {
    it("returns real response", function(done) {
        var result = foo.get_widget();
        assert.equal(result, 'real widget');
        done();
    });
});
