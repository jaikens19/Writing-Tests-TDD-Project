const assert = require('assert')
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe('returnsThree()', () => {
    it('returns the number 3', () => {
        let expected = 3
        let actual = returnsThree()

        assert.strictEqual(expected, actual)
    })
})

describe('reciprocal()', () => {
    context('when the input is valid', () => {
        it('should return the reciprocal of the passed in number', () => {
            let expected = 2
            let actual = reciprocal(1 / 2)

            assert.strictEqual(expected, actual)

            expected = 1 / 2
            actual = reciprocal(2)

            assert.strictEqual(expected, actual)
        })
    })
    context('when the input is invalid', () => {
        it('should throw a TypeError', () => {
            assert.throws(function () {
                reciprocal(0)
            },
                TypeError,
                'please provide a number between 1 and 1 million'
            )

            assert.throws(function () {
                reciprocal(1000001)
            },
                TypeError,
                'please provide a number between 1 and 1 million'
            )
        })
    })
})
