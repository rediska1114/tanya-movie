export const getMovieDuration = (runtime: number) => {
	const h = Math.trunc(runtime / 60)
	const m = runtime % 60
	return [h && `${h}h`, m && `${m}m`].filter(val => !!val).join(' ')
}

export const getMoneys = (count: number) => {
	if (count === 0) return '–'
	return '$' + count.toLocaleString('en')
}

export const getYear = (date?: string): number => {
	if (!date) return 0

	return Number.parseInt(date.split('-')[0])
}
