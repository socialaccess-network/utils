import { expect, it } from 'vitest'
import { startsWith } from './startsWith'

it('startsWith', () => {
	expect(startsWith([1, 2, 3], 1)).toBe(true)
	expect(startsWith([1, 2, 3], 2)).toBe(false)

	expect(startsWith('abc', 'a')).toBe(true)
	expect(startsWith('abc', 'b')).toBe(false)

	expect(startsWith(new Set([1, 2, 3]), 1)).toBe(true)
	expect(startsWith(new Set([1, 2, 3]), 2)).toBe(false)
})
