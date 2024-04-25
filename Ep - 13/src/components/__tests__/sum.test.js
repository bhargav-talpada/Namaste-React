import { sum } from "../sum"


test('Sum function should calculate the sum of two numbers', () => {
    const result = sum(24,72);

    // Below line is known as Assertion
    expect(result).toBe(96);
})