test:
	./node_modules/.bin/mocha

test_foo_with_mock:
	./node_modules/.bin/mocha test/foo.with_mock.unit.js

test_foo_no_mock:
	./node_modules/.bin/mocha test/foo.no_mock.unit.js

test_widget_with_mock:
	./node_modules/.bin/mocha test/widget.with_mock.unit.js

.PHONY: test
