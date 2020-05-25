import { IMovie, IGenre, IDetailedMovie } from '.'

export declare namespace ApiResponse {
	namespace Discover {
		interface Movie {
			page: number
			results: IMovie[]
			total_results: number
			total_pages: number
		}
	}
	namespace Search {
		interface Movie {
			page: number
			results: IMovie[]
			total_results: number
			total_pages: number
		}
	}
	interface Configuration {
		images: {
			base_url: string
			secure_base_url: string
			backdrop_sizes: string[]
			logo_sizes: string[]
			poster_sizes: string[]
			profile_sizes: string[]
			still_sizes: string[]
		}
		change_keys: string[]
	}
	namespace Genre {
		namespace Movie {
			interface List {
				genres: IGenre[]
			}
		}
	}
	namespace Movie {
		type GetDetails = IDetailedMovie
	}
}

export type IApiResponse<T> = T
