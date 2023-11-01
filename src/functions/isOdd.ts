import { isEven } from './isEven'

/**
 * Returns true if the given number is odd, false otherwise.
 *
 * @param num The number to check.
 * @returns True if the number is odd, false otherwise.
 */
export function isOdd(num: number): boolean {
	return !isEven(num)
}
