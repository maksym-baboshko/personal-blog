import { type Dispatch, type SetStateAction, useEffect, useState, useCallback } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

export const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const readValue = useCallback((): T => {
    try {
      const item = localStorage.getItem(key)
      return item !== null ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      return initialValue
    }
  }, [initialValue, key])

  const [storedValue, setStoredValue] = useState<T>(readValue())

  const setValue = (newValue: SetStateAction<T>): void => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(storedValue) : newValue
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Failed setting the key: "${key}" in the storage`, error)
    }
  }

  useEffect(() => {
    setStoredValue(readValue())
  }, [])

  return [storedValue, setValue]
}
