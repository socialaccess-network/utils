import { isRecord } from './isRecord'

export function isMap<T extends Map<any, any>>(thing: unknown): thing is T {
	return isRecord(thing) && thing instanceof Map
}
