import { expect, it } from 'vitest'
import { isRecord } from './isRecord'

it('checks if input is a record-like object', () => {
	expect(isRecord({})).toBe(true)
	expect(isRecord({ foo: 'bar' })).toBe(true)
	expect(isRecord(new Object())).toBe(true)
	expect(isRecord(new Object({ foo: 'bar' }))).toBe(true)

	expect(isRecord([])).toBe(false)
	expect(isRecord('')).toBe(false)
	expect(isRecord(1)).toBe(false)
	expect(isRecord(true)).toBe(false)
	expect(isRecord(null)).toBe(false)
	expect(isRecord(undefined)).toBe(false)
	expect(isRecord(() => {})).toBe(false)
	expect(isRecord(Symbol('foo'))).toBe(false)
})
