export function clone<T = any>(subject: T): T {
	try {
		return JSON.parse(JSON.stringify(subject))
	} catch (e) {
		console.error(e)
		return subject
	}
}

export function removeDuplicates<T extends { id: number } = any>(items: T[]): T[] {
	const obj: Record<string, T> = items.reduce((all, cur) => ({ ...all, ['#' + cur.id]: cur }), {})
	return Object.keys(obj).map(id => obj[id])
}
