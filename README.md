Node.js Mocking with Mockery
============================

## Installation

```
npm install .
```

## Running tests


This passes:

```
make test_with_mock
```

And this passes:

```
make test_no_mock
```

But this fails, which runs both of the above:

```
make test
```

    no mock
     (ok) returns real response  

    with mock
      0) returns mocked response 


    1 of 2 tests failed:

    0) with mock returns mocked response:
       
    AssertionError: "mocked widget" == "real widget"
        at Test.fn (/Users/bryan/code/nodejs-mock-test/test/with_mock.unit.js:27:16)
        at Test.run (/Users/bryan/code/nodejs-mock-test/node_modules/mocha/lib/runnable.js:138:12)
        at Runner.runTest (/Users/bryan/code/nodejs-mock-test/node_modules/mocha/lib/runner.js:270:10)
        at /Users/bryan/code/nodejs-mock-test/node_modules/mocha/lib/runner.js:310:12
        at next (/Users/bryan/code/nodejs-mock-test/node_modules/mocha/lib/runner.js:198:14)
        at /Users/bryan/code/nodejs-mock-test/node_modules/mocha/lib/runner.js:207:7
        at next (/Users/bryan/code/nodejs-mock-test/node_modules/mocha/lib/runner.js:157:23)
        at Array.<anonymous> (/Users/bryan/code/nodejs-mock-test/node_modules/mocha/lib/runner.js:175:5)
        at EventEmitter._tickCallback (node.js:126:26)


As you can see, the mock is not recognized in the mock test, since the real module has already been loaded and cached in the require.cache.
