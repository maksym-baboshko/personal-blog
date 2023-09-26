import { classNames } from './classNames'

describe('classNames', () => {
  it('should work with 1 arg', () => {
    expect(classNames('some-class')).toBe('some-class')
  })

  it('should work with additional classes', () => {
    const expectedResult = 'some-class another-class one-more-class'

    expect(classNames('some-class', {}, ['another-class', 'one-more-class'])).toBe(expectedResult)
  })

  it('should work with mods classes', () => {
    const expectedResult = 'some-class anotherClass one-more-class'
    const mods = { anotherClass: true, oneMoreClass: false }

    expect(classNames('some-class', mods, ['one-more-class'])).toBe(expectedResult)
  })
})
