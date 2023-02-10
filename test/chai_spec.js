const { expect, assert } = require('chai');
const should = require('chai').should();

// Run Suite | Debug Suite | Run | Debug | Show in Test Explorer

describe('Chai Assertions', () => {
    const a = 20,
    arr = [30, 40, 50],
    obj = {name: 'Avi', age: 9 },
    myFunc = (a, b) => a + b;
    isTrue = true,
    nan = NaN,
    myUndefined = undefined;

// Debug Item | Run Item
    it.only ('Assert Style', () => {
    assert.ok(true)
    // assert.typrOf(arr, 'array');
    // assert.typeof(arr, 'array');
    // assert.include (arr, 30, "30 isn't there in the array");
    // assert.lengthof (arr, 3, "length isn't 3");
    // assert.deepEqual (arr, [30, 40, 50])
    // assert.equal (arr, [30, 40, 50])
    // assert.sameOrderedMembers (arr, [30, 40, 50])
    });


    it('Expect Style', () => {
    expect(true).to.be.false
    // expect(arr).to.be.a(array')
    // expect(arr). to. have. Length (3);
    // expect (arr). to.eql ([30, 40, 50]);
    // expect (obj).to.have.keys (["name", "age"]);
    });

    it.only('Should Style', () => {
        true.should.be.true
        //arr.should.include(30)
    });
});
