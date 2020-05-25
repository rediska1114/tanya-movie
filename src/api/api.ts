import axios, { AxiosRequestConfig } from 'axios'
import { IApiResponse, ApiResponse } from '../interfaces'

export const api = axios.create({
	baseURL: process.env.REACT_APP_API_HOST || '/',
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
	}
})

const CURRENT_YEAR = new Date().getFullYear()

export class API {
	static request = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
		return new Promise<T>((resolve, reject) => {
			api
				.get<IApiResponse<T>>(url, {
					...config,
					params: {
						// language: 'ru',
						...data
					}
				})
				.then(res => {
					resolve(res.data)
				})
				.catch(err => {
					console.error(err)
					reject(err)
				})
		})
	}

	static DiscoverMovies = (page: number, genres: number[], rating: number[], release: number[]) => {
		return API.request<ApiResponse.Discover.Movie>('/discover/movie', {
			region: 'us',
			sort_by: 'release_date.desc',
			page,
			with_genres: genres.join('|'),
			'vote_average.gte': rating[0],
			'vote_average.lte': rating[1],
			'release_date.gte': `${release[0]}-01-01`,
			'release_date.lte': release[1] < CURRENT_YEAR ? `${release[1]}-12-31` : new Date()
		})
	}
	static SearchMovies = (page: number, query: string) => {
		return API.request<ApiResponse.Search.Movie>('/search/movie', {
			page,
			query
		})
	}

	static Configuration = () => {
		return API.request<ApiResponse.Configuration>('/configuration')
	}

	static GetGenres = () => {
		return API.request<ApiResponse.Genre.Movie.List>('/genre/movie/list').then(data => data.genres)
	}

	static GetMovieDetail = (id: number) => {
		return API.request<ApiResponse.Movie.GetDetails>(`/movie/${id}`, {
			append_to_response: 'credits'
		})
	}
}
