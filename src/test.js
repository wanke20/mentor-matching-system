const {test, expect} = require('@jest/globals')
function add(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(add(3, 4)).toBe(7);
});