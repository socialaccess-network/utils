import { expect, it } from 'vitest'
import { endsWith } from './endsWith'

it('endsWith', () => {
	expect(endsWith([1, 2, 3], 3)).toBe(true)
	expect(endsWith([1, 2, 3], 2)).toBe(false)

	expect(endsWith('abc', 'c')).toBe(true)
	expect(endsWith('abc', 'b')).toBe(false)

	expect(endsWith(new Set([1, 2, 3]), 3)).toBe(true)
	expect(endsWith(new Set([1, 2, 3]), 2)).toBe(false)
})
