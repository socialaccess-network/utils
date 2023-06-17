import { isRecord } from './isRecord'

/**
 * Checks if thing is instance of Error.
 *
 * @param thing The thing to check.
 * @returns thing is Error
 *
 * @example
 * const thing = new Error('Hello, there!') as Error | null
 *
 * if (isError(thing)) {
 * 	// thing is type Error
 * } else {
 * 	// thing is type null
 * }
 */
export function isError<T extends Error>(thing: unknown): thing is T {
	return isRecord(thing) && thing instanceof Error
}
