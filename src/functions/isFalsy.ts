export type FalsyValue = null | undefined | false | 0 | '' | void | -0 | 0n

/**
 * checks if thing is falsy
 *
 * @alias not
 * @param thing
 * @returns thing is FalsyValue
 *
 * @example
 * const thing = 'hello' as string | null | false
 *
 * if (isFalsy(thing)) {
 * 	// thing is type null | false
 * } else {
 * 	// thing is type string
 * }
 */
export function isFalsy<T extends FalsyValue>(thing: unknown): thing is T {
	return !thing
}
