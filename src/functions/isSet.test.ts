import { expect, it } from 'vitest'
import { isSet } from './isSet'

it('checks if input is a Set', () => {
	expect(isSet(new Set())).toBe(true)
	expect(isSet(new Map())).toBe(false)
	expect(isSet(new WeakSet())).toBe(false)
	expect(isSet(new WeakMap())).toBe(false)
	expect(isSet(new Date())).toBe(false)
	expect(isSet(new Error())).toBe(false)
	expect(isSet(new Promise(() => {}))).toBe(false)
	expect(isSet(new Proxy({}, {}))).toBe(false)
	expect(isSet(Symbol('a'))).toBe(false)
})
