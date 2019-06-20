global.window = global;
global.assert = require('chai').assert;
require('../src/operators');
require('./operators.spec.js');
