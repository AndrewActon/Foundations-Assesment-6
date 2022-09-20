const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    
    test('Be the same length', () => {
        expect(shuffleArray.length).toEqual(bots.length)
      })

    test('Has all the same items', () => {
        expect(shuffleArray).toEqual(expect.arrayContaining(bots))
    })

})