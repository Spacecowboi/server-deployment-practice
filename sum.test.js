const sum = require('./sum.js');

//these methods, such as describe, test, and expect, are all built into Jest to give us context as to what the code is doing

describe('Testing the sum package', () => {
    test('Should be able to sum 2 numbers', () => {
        let result = sum(4,8);
        expect(result).toEqual(12);
    });
});