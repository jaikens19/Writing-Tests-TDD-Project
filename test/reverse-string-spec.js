const chai = require('chai')
const expect = chai.expect
const reverseString = require('../problems/reverse-string')
describe('Reverse String Function', () => {
    context('When the input is valid', () => {
        it("Should return a string reversed", () => {
            let expected = "nuf"
            let actual = reverseString("fun")
            expect(actual).to.eql(expected)
        })
    })
    context('When the input is not valid', () => {
        it('should throw an error', () => {
            expect(() => reverseString(1)).to.throw(Error)
            // expect(reverseString.bind(1)).to.throw(Error)
        })
    })
})
