import React from 'react'
const hash = require('object-hash')

function arePropsEqual<T>(prevProps: T, nextProps: T): boolean {
	try {
		return hash(prevProps) === hash(nextProps)
	} catch {
		console.error(prevProps, nextProps)
		return false
	}
}

type componentType<T> = React.FC<T>

export function pure<T extends object>(Component: componentType<T>) {
	const comp = Component
	return React.memo<componentType<T>>(comp, arePropsEqual)
}
