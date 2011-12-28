var third_party = require('./third_party');

var get_widget = function() {
    return 'real widget';
};

var get_internet_widget = function() {
    return third_party.download_internet();
};

exports.get_widget = get_widget;
exports.get_internet_widget = get_internet_widget;
