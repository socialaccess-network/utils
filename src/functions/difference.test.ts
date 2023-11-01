import { expect, it } from 'vitest'
import { difference } from './difference'

it('should return the difference of three arrays', () => {
	const arr1 = [1, 2, 3]
	const arr2 = [2, 3, 4]
	const arr3 = [3, 4, 5]

	const diff = difference(arr1, arr2, arr3)

	expect(diff).toEqual([1])
})

it('should return the difference of two arrays', () => {
	const arr1 = [1, 2, 3]
	const arr2 = [2, 3, 4]

	const diff = difference(arr1, arr2)

	expect(diff).toEqual([1])
})

it('should return the difference of two sets', () => {
	const set1 = new Set([1, 2, 3])
	const set2 = new Set([2, 3, 4])

	const diff = difference(set1, set2)

	expect(diff).toEqual([1])
})
