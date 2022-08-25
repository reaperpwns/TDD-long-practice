const chai = require("chai");
const expect = chai.expect;

const reverseString = require('../problems/reverse-string')

describe('reverse string', function () {
    it('should reverse given word', function () {
        let expectedString = 'nuf'
        let reversed = reverseString('fun')
        expect(reversed).to.equal(expectedString)
    })
    it('should be a string', function () {
        let number = 4
        expect(() => reverseString(number)).to.throw(Error)
    })
})
