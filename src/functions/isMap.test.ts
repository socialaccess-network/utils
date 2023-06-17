import { expect, it } from 'vitest'
import { isMap } from './isMap'

it('checks if input is a Map', () => {
	expect(isMap(new Map())).toBe(true)
	expect(isMap(new Set())).toBe(false)
	expect(isMap(new WeakMap())).toBe(false)
	expect(isMap(new WeakSet())).toBe(false)
	expect(isMap(new Date())).toBe(false)
	expect(isMap(new Error())).toBe(false)
	expect(isMap(new Promise(() => {}))).toBe(false)
	expect(isMap(new Proxy({}, {}))).toBe(false)
	expect(isMap(Symbol('a'))).toBe(false)
})
