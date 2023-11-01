import { isArray } from './isArray'
import { isIterable } from './isIterable'

/**
 * Returns the difference between two or more iterables.
 * The difference is the items that are in the first iterable but not the second.
 *
 * Does not work with Maps.
 *
 * @param target The iterable to compare.
 * @param sources The iterables to compare against.
 * @returns The difference between the iterables.
 *
 * @example
 * const arr1 = [1, 2, 3]
 * const arr2 = [2, 3, 4]
 * const arr3 = [3, 4, 5]
 *
 * const diff = difference(arr1, arr2, arr3)
 *
 * console.log(diff) // [1]
 */
export function difference<T>(
	target: Iterable<T>,
	...sources: Iterable<T>[]
): T[] {
	const result: T[] = []
	const sourcesLength = sources.length

	for (const item of target) {
		let found = false

		for (let i = 0; i < sourcesLength; i++) {
			const source = sources[i]

			if (isArray(source)) {
				if (source.includes(item)) {
					found = true
					break
				}
			} else if (source instanceof Set) {
				if (source.has(item)) {
					found = true
					break
				}
			} else if (isIterable(source)) {
				for (const value of source) {
					if (value === item) {
						found = true
						break
					}
				}
			} else {
				throw new TypeError('Expected an array, Set, or iterable.')
			}
		}

		if (!found) {
			result.push(item)
		}
	}

	return result
}
