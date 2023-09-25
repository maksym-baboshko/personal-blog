import { classNames } from './classNames'

describe('classNames', () => {
  it('should work with 1 arg', () => {
    expect(classNames('some-class')).toBe('some-class')
  })

  it('should work with additional classes', () => {
    const expectedResult = 'some-class another-class one-more-class'

    expect(
      classNames('some-class', {}, ['another-class', 'one-more-class'])
    ).toBe(expectedResult)
  })

  it('should work with mods classes', () => {
    const expectedResult = 'some-class anotherClass one-more-class'

    expect(
      classNames('some-class', { anotherClass: true, oneMoreClass: false }, [
        'one-more-class'
      ])
    ).toBe(expectedResult)
  })
})
