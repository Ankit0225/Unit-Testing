const mocha = require('mocha')
const chai = require('chai')

const farePrice = require('../fare')

const expect = chai.expect 

describe('farePrice', function () {

 it('Expect Fare to be 30 for 0Km, 0Min', () => {
     let fare = farePrice.calculate_Fare(0,0)
     expect(fare).to.equal(30)
 })


 it('Expect Fare to be 30 for 10Km, 0Min', () => {
     let fare = farePrice.calculate_Fare(10,0)
     expect(fare).to.equal(80)
 })


     it('Expect Fare to be 40 for 2Km, 20Min', () => {
     let fare = farePrice.calculate_Fare(2,20)
     expect(fare).to.equal(40)
 })

})