const assert = require('node:assert').strict;
const { capitalize } = require('../src/capitalize.js');

const values = [
    {
        value: 'hello',
        returnValue: 'Hello',
    },
    {
        value: '',
        returnValue: '',
    }
];

values.forEach(({ value, returnValue }) => assert.strictEqual(capitalize(value), returnValue));

console.log('Все работает корректно!');
