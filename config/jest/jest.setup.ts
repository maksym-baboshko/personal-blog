import 'whatwg-fetch'
import '@testing-library/jest-dom'

jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem').mockImplementation(() => {})
