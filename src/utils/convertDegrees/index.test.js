const assert = require("assert");
const covertCelsiusToFahrenheit = require("./index");

assert.equal(covertCelsiusToFahrenheit(0), 32);
assert.equal(covertCelsiusToFahrenheit(10), 50);
assert.equal(covertCelsiusToFahrenheit(33), 91.4);
assert.equal(covertCelsiusToFahrenheit(-25), -13);
assert.equal(covertCelsiusToFahrenheit(22.5), 72.5);
