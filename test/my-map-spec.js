const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies')
chai.use(spies)
const myMap = require('../problems/my-map')

describe('myMap()', () => {
    let arr
    let cb
    let returnedArr
    beforeEach('initilize a new array', () => {
        arr = [1,2,3]
        cb = num => num * 2
        returnedArr = arr.map(el => cb(el))
    })
    it('works like array.map', () => {
        let expected = returnedArr
        let actual = myMap(arr, cb)
        expect(actual).to.eql(expected)
    })
    it('does not mutate passed in array', () => {
        let expected = arr.slice()
        myMap(arr, cb)
        expect(arr).to.eql(expected)
    })
    it('should not call Array.map', () => {
        const arrayMapSpy = chai.spy.on(arr, 'map')
        myMap(arr, cb)
        expect(arrayMapSpy).to.not.have.been.called()
    })
    it('should call the callback once for each element', () => {
        const cbSpy = chai.spy(cb)
        myMap(arr, cbSpy)
        expect(cbSpy).to.have.been.called.exactly(arr.length)
    })
})