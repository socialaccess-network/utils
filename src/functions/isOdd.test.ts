import { expect, it } from 'vitest'
import { isOdd } from './isOdd'

it('should return true if the number is odd', () => {
	expect(isOdd(2)).toBe(false)
	expect(isOdd(5)).toBe(true)
})
