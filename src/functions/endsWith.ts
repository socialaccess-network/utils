import { isString } from './isString'
import { lastOf } from './lastOf'

export function endsWith<Item>(
	collection: Iterable<Item> | string,
	search: Item,
): boolean {
	if (isString(collection) && isString(search)) {
		return collection.endsWith(search)
	}

	const last = lastOf(collection)
	return last === search
}
