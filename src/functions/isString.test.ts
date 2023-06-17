import { expect, it } from 'vitest'
import { isString } from './isString'

it('returns true if input is a string', () => {
	expect(isString('')).toBe(true)
	expect(isString('foo')).toBe(true)
	expect(isString(new String('foo'))).toBe(true)

	expect(isString({})).toBe(false)
	expect(isString([])).toBe(false)
	expect(isString(1)).toBe(false)
	expect(isString(true)).toBe(false)
	expect(isString(null)).toBe(false)
	expect(isString(undefined)).toBe(false)
	expect(isString(() => {})).toBe(false)
	expect(isString(Symbol('foo'))).toBe(false)
})
