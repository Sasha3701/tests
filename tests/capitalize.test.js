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

values.forEach(({ value, returnValue }) => {
    if (capitalize(value) !== returnValue) {
        throw new Error(`Ошибка! Входной данные: ${value}`);
    }
});

console.log('Все работает корректно!');
