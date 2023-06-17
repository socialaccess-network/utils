import { FunctionType } from '../types'

/**
 * Checks if thing is a function.
 *
 * @param thing - The thing to check.
 * @returns thing is FunctionType
 *
 * @example
 * const thing = 'hello' as string | FunctionType | (...args: any[]) => any
 *
 * if (isFunction(thing)) {
 * 	// thing is type FunctionType | (...args: any[]) => any
 * } else {
 * 	// thing is type string
 * }
 */
export function isFunction<T extends FunctionType>(thing: unknown): thing is T {
	return typeof thing === 'function'
}
