import { isRecord } from './isRecord'

export function isSet<T extends Set<any>>(thing: unknown): thing is T {
	return isRecord(thing) && thing instanceof Set
}
