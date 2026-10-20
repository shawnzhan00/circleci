const test = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('../app.js');

test('greet returns hello world', () => {
  assert.equal(greet(), 'Hello, world!');
});

test('greet accepts a custom name', () => {
  assert.equal(greet('CircleCI'), 'Hello, CircleCI!');
});
