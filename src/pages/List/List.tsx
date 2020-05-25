import React, { useEffect, useState } from 'react'
import styles from './List.module.scss'
import classNames from 'classnames'
import { ListProps } from './List.d'
import { MovieFilter, MovieCard, MovieSide } from '../../components'
import { connect, MapDispatchToProps } from 'react-redux'
import { IAppState, TDispatch, MoviesActions } from '../../store'
import useDebounce from '../../hooks/useDebounce'
import { resolveImageSize } from '../../utils'

const List: React.FC<ListProps.Props> = props => {
	const { className, filter, fetchMovies, movies, configuration } = props

	const filter_ = useDebounce(filter, 500)

	const [detail, setDetail] = useState<boolean>(false)

	const _resolveImage = (src: string | null) =>
		configuration && src ? resolveImageSize(configuration, src, 'backdrop', 780) : ''

	useEffect(() => {
		fetchMovies()
	}, [fetchMovies, filter_])

	return (
		<div className={classNames(styles.List, className)}>
			<div className={styles.MovieFilterContainer}>
				<MovieFilter className={styles.MovieFilter} type='header' />
			</div>
			<div className={styles.MoviesList}>
				{movies.map(movie => (
					<MovieCard
						key={movie.id}
						onClick={setDetail.bind(null, !detail && true)}
						movie={movie}
						className={styles.MovieCard}
						background={_resolveImage(movie.backdrop_path)}
					/>
				))}
			</div>
			{detail && <div className={styles.MovieSidePanelContainer}></div>}
			<MovieSide
				className={classNames(styles.MovieSidePanel, {
					[styles.Active]: detail
				})}
				onClose={setDetail.bind(null, false)}
			/>
		</div>
	)
}

List.defaultProps = {}

const mapStateToProps = (state: IAppState): ListProps.Store => ({
	filter: state.Filters.filter,
	...state.Movies,
	configuration: state.root.configuration
	// ...state.List
})

const mapDispatchToProps: MapDispatchToProps<ListProps.Dispatch, ListProps.Own> = (
	dispatch: TDispatch
) => ({
	fetchMovies: () => dispatch({ type: MoviesActions.FETCH_MOVIES, payload: {} })
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
