/**
 * Check if a thing is a bigint.
 *
 * @param thing The thing to check.
 * @returns thing is bigint
 *
 * @example
 *
 * const thing = 1n as bigint | number
 *
 * if (isBigInt(thing)) {
 * 	// thing is a bigint
 * } else {
 * 	// thing is number
 * }
 */
export function isBigInt(thing: unknown): thing is bigint {
	return typeof thing === 'bigint'
}
