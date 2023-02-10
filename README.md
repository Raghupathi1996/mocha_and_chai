#
##
### command line usage
--timeout 
-b, --bail                 Abort ("bail") after first test failure   [boolean]
- R 'Progress'
- R 'dot' 
-- parallel - limitations reports and progress wont work, exclusive tests are disallowed, .`.only` is not supported in the parallel

### Test Filters
    "test": "mocha 'test/**/async.app.spec.js' --timeout 50000",
