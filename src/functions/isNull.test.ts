import { expect, it } from 'vitest'
import { isNull } from './isNull'

it('checks if input is null', () => {
	expect(isNull(null)).toBe(true)
	expect(isNull(undefined)).toBe(false)
	expect(isNull(0)).toBe(false)
	expect(isNull('')).toBe(false)
	expect(isNull([])).toBe(false)
	expect(isNull({})).toBe(false)
})
