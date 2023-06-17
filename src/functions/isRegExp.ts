import { isRecord } from './isRecord'

export function isRegExp(thing: unknown): thing is RegExp {
	return isRecord(thing) && thing instanceof RegExp
}
