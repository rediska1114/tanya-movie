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
