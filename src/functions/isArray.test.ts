import { expect, it } from 'vitest'
import { isArray } from './isArray'

it('returns true if input is a array', () => {
	expect(isArray([])).toBe(true)
	expect(isArray([1, 2, 3])).toBe(true)
	expect(isArray(new Array())).toBe(true)
	expect(isArray(new Array(1, 2, 3))).toBe(true)

	expect(isArray({})).toBe(false)
	expect(isArray('')).toBe(false)
	expect(isArray(1)).toBe(false)
	expect(isArray(true)).toBe(false)
	expect(isArray(null)).toBe(false)
	expect(isArray(undefined)).toBe(false)
	expect(isArray(() => {})).toBe(false)
	expect(isArray(Symbol('foo'))).toBe(false)
})
