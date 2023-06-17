import { isNull } from './isNull'

/**
 * Strictly checks if a value is a object (excluding null) or array.
 */
export function isObject<T extends object>(thing: unknown): thing is T {
	return typeof thing === 'object' && !isNull(thing)
}
