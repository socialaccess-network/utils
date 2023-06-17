import { inRecord } from './inRecord'
import { isFunction } from './isFunction'
import { isRecord } from './isRecord'

export function isPromise<T extends Promise<any>>(thing: unknown): thing is T {
	return isRecord(thing) && thing instanceof Promise
}

export function isPromiseLike<T extends PromiseLike<any>>(
	thing: unknown,
): thing is T {
	return inRecord(thing, ['then']) && isFunction(thing.then)
}
