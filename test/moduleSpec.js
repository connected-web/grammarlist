/* global describe it */
const expect = require('chai').expect
const grammarList = require('../module')

describe('Grammar List', () => {
  let sortedList = ['Apples', 'Bananas', 'Clementines', 'Pears']
  let unsortedList = ['Triela', 'Henrietta', 'Claus', 'Angelica']

  it('should return a string', () => {
    const expected = ''
    const actual = grammarList(sortedList)
    expect(typeof actual).to.equal(typeof expected)
  })

  it('should place a default clause `and` before the final item', () => {
    const expected = 'Apples, Bananas, Clementines, and Pears'
    const actual = grammarList(sortedList)
    expect(actual).to.equal(expected)
  })

  it('should allow a custom clause to be used', () => {
    const expected = 'Apples, Bananas, Clementines, then Pears'
    const actual = grammarList(sortedList, 'then')
    expect(actual).to.equal(expected)
  })

  it('should sort the list of items by default', () => {
    const expected = 'Angelica, Claus, Henrietta, and Triela'
    const actual = grammarList(unsortedList)
    expect(actual).to.equal(expected)
  })

  it('should allow sorting to be turned off', () => {
    const expected = 'Triela, Henrietta, Claus, and Angelica'
    const actual = grammarList(unsortedList, 'and', false)
    expect(actual).to.equal(expected)
  })

  it('should not modify the sort order of the input', () => {
    const expected = ['Triela', 'Henrietta', 'Claus', 'Angelica']
    const actual = unsortedList
    grammarList(actual, 'and', true)
    expect(actual).to.deep.equal(expected)
  })
})
