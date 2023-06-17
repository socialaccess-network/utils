import { inRecord } from './inRecord'
import { isFunction } from './isFunction'

/**
 * Check if a thing is an async iterable.
 *
 * @param thing The thing to check.
 * @returns thing is AsyncIterable<any>
 */
export function isAsyncIterable<T extends AsyncIterable<any>>(
	thing: unknown,
): thing is T {
	return (
		inRecord(thing, [Symbol.asyncIterator]) &&
		isFunction(thing[Symbol.asyncIterator])
	)
}
