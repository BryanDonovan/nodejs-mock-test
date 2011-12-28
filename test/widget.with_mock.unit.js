var assert = require('assert');
var mockery = require('mockery');
var widget;

var mock_third_party = {
    download_internet: function() {
        return 'mocked internet download';
    }
};


describe("widget.js - with mock", function() {
    before(function() {
        mockery.enable();
        mockery.registerMock('./third_party', mock_third_party);
        mockery.registerAllowable('../lib/widget');
        widget = require('../lib/widget');
    });

    after(function() {
        mockery.disable();
        mockery.deregisterAll();
    });

    it("returns mocked response", function(done) {
        var result = widget.get_internet_widget();
        assert.equal(result, 'mocked internet download');
        done();
    });
});
