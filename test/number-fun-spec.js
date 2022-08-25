const chai = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");
const expect = chai.expect;

describe('number fun', function() {
    it('should return 3', function() {
        let boolean = returnsThree(3)
        expect(boolean).to.be.true;
    })
    it('should expect to be false if not 3', function() {
        let boolean = returnsThree(6)
        expect(boolean).to.be.false;
    })
})

describe('reciprocal of number', function() {
    it('should return reciprocal of given number', function() {
        let boolean1 = reciprocal(4)
        expect(boolean1).to.be.true
    })
})
