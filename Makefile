test:
	./node_modules/.bin/mocha

test_with_mock:
	./node_modules/.bin/mocha test/with_mock.unit.js

test_no_mock:
	./node_modules/.bin/mocha test/no_mock.unit.js

.PHONY: test
