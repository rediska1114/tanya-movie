import { IGenre } from './IGenre'

export interface IMovie {
	id: number
	title: string
	poster_path: string | null
	adult: boolean
	overview: string
	release_date: string
	genre_ids: number[]
	original_title: number
	original_language: string
	backdrop_path: string | null
	popularity: number
	vote_count: number
	video: boolean
	vote_average: number
}

export interface IDetailedMovie extends IMovie {
	genres: IGenre[]
	homepage: string | null
	revenue: number
	tagline: string
	runtime: number
	budget: number
	credits: {
		cast: Array<{
			cast_id: number
			character: string
			credit_id: string
			gender: number
			id: number
			name: string
			order: number
			profile_path: string
		}>
		crew: object[]
	}
}
