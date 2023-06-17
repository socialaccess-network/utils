import { isFunction } from './isFunction'
import { isNull } from './isNull'

/**
 * Check if a thing is iterable.
 *
 * @param thing The thing to check.
 * @returns thing is Iterable<any>
 */
export function isIterable<T extends Iterable<any>>(
	thing: unknown,
): thing is T {
	return (
		typeof thing === 'object' &&
		!isNull(thing) &&
		Symbol.iterator in thing &&
		isFunction(thing[Symbol.iterator])
	)
}
