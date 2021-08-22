const mocha = require('mocha')
const expect = require('chai').expect
const request = require('request')

const app = require('../server')

let server;
describe('server',() => {
   
    before((done) => {
       server = app.listen(PORT, done)
    })
    it('rates should be correct',(done) => {
        request.get(`http://localhost:${PORT}/rate`, (err, resp, body)=> {
            let rates = JSON.parse(body) 
            expect(rates.fixed).to.equal(30)
            expect(rates.perkm).to.equal(10)
            done()
        })
    })

    after(() => {
      server.close()
    })
})