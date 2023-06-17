export function isSymbol(thing: unknown): thing is symbol {
	return typeof thing === 'symbol'
}
