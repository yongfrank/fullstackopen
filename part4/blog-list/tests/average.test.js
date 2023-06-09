const average = require('../utils/for_testing').average

describe('average', () => {
    test('of one value is the value it self', () => {
        const result = average([1])
        expect(result).toBe(1)
    })

    test('of many is calculated right', () => {
        const result = average([1,2,3,4,5,6])
        expect(result).toBe(3.5)
    })

    test('of empty array is zero', () => {
        const result = average([])
        expect(result).toBe(0)
    })
})