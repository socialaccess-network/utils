import { clone, cloneDeep } from './clone'
import { isDefined } from './isDefined'

/**
 * Returns a new object including all properties from both objects.
 *
 * @param obj The object to check for missing properties
 * @param defaults The object to use as defaults
 * @returns a new object including all properties from both objects.
 */
export function defaults<T extends object, U extends object>(
	obj: T,
	defaults: U,
): T & U {
	return Object.keys(defaults).reduce((acc, key) => {
		if (!isDefined(acc[key])) {
			acc[key] = defaults[key]
		}
		return acc
	}, clone(obj) as T & U)
}

export function defaultsDeep<T extends object, U extends object>(
	obj: T,
	defaults: U,
): T & U {
	return Object.keys(defaults).reduce((acc, key) => {
		if (obj[key] === undefined) {
			acc[key] = defaults[key]
		} else if (
			typeof obj[key] === 'object' &&
			typeof defaults[key] === 'object'
		) {
			acc[key] = defaultsDeep(obj[key], defaults[key])
		}
		return acc
	}, cloneDeep(obj) as T & U)
}
