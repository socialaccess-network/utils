import { firstOf } from './firstOf'
import { isString } from './isString'

export function startsWith<Item>(
	collection: Iterable<Item> | string,
	search: Item,
): boolean {
	if (isString(collection) && isString(search)) {
		return collection.startsWith(search)
	}

	const first = firstOf(collection)
	return first === search
}
