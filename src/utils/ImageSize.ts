import { IConfiguration } from '../interfaces'

export const resolveImageSize = (
	configuration: IConfiguration,
	imageSrc: string,
	type: 'backdrop' | 'poster',
	size: number
): string => {
	const _size = (type === 'backdrop'
		? configuration.backdropSizes
		: configuration.posterSizes
	).find(s => s >= size)
	return configuration.imagesUrl + '/w' + _size + imageSrc
}
