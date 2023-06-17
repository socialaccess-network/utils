import { expect, it } from 'vitest'
import { isNumber } from './isNumber'

it('checks if input is a number', () => {
	expect(isNumber(0)).toBe(true)
	expect(isNumber(1)).toBe(true)
	expect(isNumber(Infinity)).toBe(true)
	expect(isNumber(-Infinity)).toBe(true)
	expect(isNumber(NaN)).toBe(true)
	expect(isNumber('')).toBe(false)
	expect(isNumber([])).toBe(false)
	expect(isNumber({})).toBe(false)
	expect(isNumber(null)).toBe(false)
	expect(isNumber(undefined)).toBe(false)
})
