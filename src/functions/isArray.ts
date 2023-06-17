/**
 * checks if thing is an array
 *
 * @param thing
 * @returns thing is any[]
 *
 * @example
 * const thing = [1, 2, 3] as number[] | string
 *
 * if (isArray(thing)) {
 * 	// thing is number[]
 * } else {
 * 	// thing is string
 * }
 *
 */
export function isArray<T extends any[]>(thing: unknown): thing is T {
	return Array.isArray(thing)
}
