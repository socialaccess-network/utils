import { isArray } from './isArray'
import { isNull } from './isNull'

/**
 * Check if a value is a record.
 *
 * @param thing The value to check.
 * @returns A type guard for the value.
 *
 * @example
 * isRecord({}) // true
 * isRecord([]) // false
 * isRecord(null) // false
 * isRecord(undefined) // false
 * isRecord(0) // false
 * isRecord('') // false
 *
 */
export function isRecord<T extends Record<any, any>>(
	thing: unknown,
): thing is T {
	return typeof thing === 'object' && !isNull(thing) && !isArray(thing)
}
