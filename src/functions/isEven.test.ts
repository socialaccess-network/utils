import { expect, it } from 'vitest'
import { isEven } from './isEven'

it('should return true if the number is even', () => {
	expect(isEven(2)).toBe(true)
	expect(isEven(5)).toBe(false)
})
