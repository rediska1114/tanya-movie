export function clone<T = any>(subject: T): T {
	try {
		return JSON.parse(JSON.stringify(subject))
	} catch (e) {
		console.error(e)
		return subject
	}
}
