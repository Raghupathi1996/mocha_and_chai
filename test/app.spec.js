// 2.Understand the priorities of each function under usage of Hooks
const { add, sub} = require("../src/app");
const expect = require('chai').expect

//BDD
describe('Suite 1', () => {
    after(() => {5 
        console.log("after");
    }); 
    afterEach(() => {
        console.log("afterEach");
    });
    before(() => {
        console.log("before");
    });
    beforeEach(() => {
        console.log("beforeEach");
    });
    it( "add(2,3) should return 5", () => {
        console.log("it");
        // expect(add(2,3)).to.be.equal(50);
    });

    it( "add(3,3) should return 6", () => {
        // expect(add(3,3)).to.be.equal(6);
        console.log("it 2");
    });
})

//TDD

// suite ('Suite 1', () => {
//     suiteSetup(() => {
//         console.log("suiteSetup");
//     });
//     setup(() => {
//         console.log("setup");
//     });
//     suiteTeardown(() => {
//         console.log("suiteTearDown");
//     });
//     teardown(() => {
//         console.log("teardown");
//     });
//     test("add(3,4) should return 7", () => {
//         console.log("test")
//     })
//     test("add(4,4) should return 7", () => {
//         console.log("test two")
//     })
// })

