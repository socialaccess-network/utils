/**
 * Check if a thing is a boolean.
 *
 * @param thing The thing to check.
 * @returns thing is boolean
 *
 * @example
 *
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean(0) // false
 * isBoolean(1) // false
 * isBoolean('') // false
 * isBoolean('true') // false
 * isBoolean('false') // false
 * isBoolean([]) // false
 *
 * const thing = true as boolean | null | number
 *
 * if (isBoolean(thing)) {
 * 	// thing is type boolean
 * } else {
 * 	// thing is type null | number
 * }
 */
export function isBoolean(thing: unknown): thing is boolean {
	return typeof thing === 'boolean'
}
