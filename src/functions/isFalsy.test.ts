import { expect, it } from 'vitest'
import { isFalsy } from './isFalsy'

it('checks if input is falsy', () => {
	expect(isFalsy(null)).toBe(true)
	expect(isFalsy(undefined)).toBe(true)
	expect(isFalsy(0)).toBe(true)
	expect(isFalsy('')).toBe(true)
	expect(isFalsy([])).toBe(false)
	expect(isFalsy({})).toBe(false)
	expect(isFalsy(false)).toBe(true)
	expect(isFalsy(NaN)).toBe(true)
	expect(isFalsy(1)).toBe(false)
})
