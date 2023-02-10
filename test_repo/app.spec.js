//1.BDD and TDD basics
const { add, sub} = require("../src/app");
const expect = require('chai').expect

//BDD
// describe('Suite 1', () => {
//     it( "add(2,3) should return 5", () => {
//         expect(add(2,3)).to.be.equal(50);
//     })
// })

// describe('Suite 2', () => {
//     it( "add(3,3) should return 6", () => {
//         expect(add(3,3)).to.be.equal(6);
//     })
// })

//TDD

// const {suite, test} = require('mocha')

suite('Suite 3', () => {
    test( "add(3,6) should return 9", () => {
        expect(add(3,6)).to.be.equal(9);
    })
})

suite('Suite 4', () => {
    test( "sub(3,6) should return 3", () => {
        expect(add(6,3)).to.be.equal(3);
    })
})