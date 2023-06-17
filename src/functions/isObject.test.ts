import { expect, it } from 'vitest'
import { isObject } from './isObject'

it('checks if input is a object (excluding null and arrays)', () => {
	expect(isObject({})).toBe(true)
	expect(isObject([])).toBe(true)
	expect(isObject(null)).toBe(false)
	expect(isObject(undefined)).toBe(false)
	expect(isObject(new Date())).toBe(true)
	expect(isObject(new Error())).toBe(true)
	expect(isObject(new Promise(() => {}))).toBe(true)
	expect(isObject(new Proxy({}, {}))).toBe(true)
	expect(isObject(Symbol('a'))).toBe(false)
})
