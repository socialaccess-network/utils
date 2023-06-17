import { isRecord } from './isRecord'

/**
 * Returns true if the thing is a Date object.
 *
 * @param thing The thing to test.
 * @returns thing is Date
 *
 * @example
 * isDate(new Date()) // true
 * isDate(true) // false
 *
 * const thing = new Date() as Date | boolean | null
 *
 * if (isDate(thing)) {
 * 	// thing is type Date
 * } else {
 * 	// thing is type boolean | null
 * }
 */
export function isDate(thing: unknown): thing is Date {
	return isRecord(thing) && thing instanceof Date
}
