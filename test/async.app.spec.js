const expect = require('chai').expect
const axios = require("axios")

describe("test suit", function () {
    let count = 0;
    it("promised based way", function () {
        console.log("retry attempt", count)
        count++;
        // this.retries(2);
        this.timeout(1000);
        return axios.get('https://reqres.in/api/users?page=2').then(res => {
            expect(res.data.data[0].email).to.be.equal("michael.lawson@reqres.in");
        })
    });

    it("done based way", (done) => {
        axios.get('https://reqres.in/api/users?page=2').then(res => {
            // console.log("1", res.data);
            // console.log("2", res.data.data[0]);
            expect(res.data.data[0].email).to.be.equal("michael.lawson@reqres.int");
            done()
        }).catch(err => {
            done(err)
        })
    });

    it("async await based way", async () => {
        const res = await axios.get('https://reqres.in/api/users?page=2')
            // console.log("1", res.data);
            // console.log("2", res.data.data[0]);
        expect(res.data.data[0].email).to.be.equal("michael.lawson@reqres.in");
    });

    it.skip("Test 2", () => {
        console.log("Test 2"); 
       })
})

describe("async test suit", function () {
    let count = 0;
    it("promised based way", function () {
        console.log("retry attempt", count)
        count++;
        // this.retries(2);
        this.timeout(1000);
        return axios.get('https://reqres.in/api/users?page=2').then(res => {
            expect(res.data.data[0].email).to.be.equal("michael.lawson@reqres.in");
        })
    });

    it("done based way", (done) => {
        axios.get('https://reqres.in/api/users?page=2').then(res => {
            // console.log("1", res.data);
            // console.log("2", res.data.data[0]);
            expect(res.data.data[0].email).to.be.equal("michael.lawson@reqres.int");
            done()
        }).catch(err => {
            done(err)
        })
    });

    it("async await based way", async () => {
        const res = await axios.get('https://reqres.in/api/users?page=2')
            // console.log("1", res.data);
            // console.log("2", res.data.data[0]);
        expect(res.data.data[0].email).to.be.equal("michael.lawson@reqres.in");
    });

    it.skip("Test 2", () => {
        console.log("Test 2"); 
       })
})

