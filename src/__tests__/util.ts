/**
 * React.UI - Application utils tests
 *
 * @version 0.0.1
 * @author Aleksandr Vorkunov
 */

function sum(a = 0, b = 0) {
    return a + b;
}

test('basic', () => {
    expect(sum()).toBe(0);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});
