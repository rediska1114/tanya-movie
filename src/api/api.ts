import axios, { AxiosRequestConfig } from 'axios'
import { IApiResponse, ApiResponse } from '../interfaces'

const api = axios.create({
	baseURL: process.env.REACT_APP_API_HOST || '/',
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
	}
})

export class API {
	static request = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
		return new Promise<T>((resolve, reject) => {
			api
				.get<IApiResponse<T>>(url, {
					...config,
					params: {
						language: 'ru',
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

	static DiscoverMovies = () => {
		return API.request<ApiResponse.Discover.Movie>('/discover/movie', {})
	}

	static Configuration = () => {
		return API.request<ApiResponse.Configuration>('/configuration')
	}

	static GetGenres = () => {
		return API.request<ApiResponse.Genre.Movie.List>('/genre/movie/list').then(data => data.genres)
	}
}
