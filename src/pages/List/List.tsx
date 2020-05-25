import React, { useEffect } from 'react'
import styles from './List.module.scss'
import classNames from 'classnames'
import { ListProps } from './List.d'
import { MovieFilter, MovieCard, MovieSide } from '../../components'
import { connect, MapDispatchToProps } from 'react-redux'
import { IAppState, TDispatch, MoviesActions } from '../../store'
import useDebounce from '../../hooks/useDebounce'
import { resolveImageSize } from '../../utils'
import InfiniteScroll from 'react-infinite-scroller'

const List: React.FC<ListProps.Props> = props => {
	const {
		className,
		filter,
		fetchMovies,
		movies,
		configuration,
		openMovieDetail,
		closeMovieDetail,
		detailed,
		loadMoreMovies,
		page,
		totalPages,
		loading
	} = props

	const filter_ = useDebounce(filter, 300)

	const hasMore = page < totalPages

	const _resolveImage = (src: string | null) =>
		configuration && src ? resolveImageSize(configuration, src, 'backdrop', 780) : ''

	const _resolvePoster = (src: string | null) => {
		if (!src) return null
		return configuration ? resolveImageSize(configuration, src, 'poster', 180) : ''
	}

	useEffect(() => {
		fetchMovies()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter_])

	return (
		<div className={classNames(styles.List, className)}>
			<div className={styles.MovieFilterContainer}>
				<MovieFilter className={styles.MovieFilter} type='header' />
				<div
					className={classNames(styles.LoadingProgress, {
						[styles.LoadingActive]: loading
					})}
				></div>
			</div>
			<div className={styles.MoviesList}>
				<InfiniteScroll
					pageStart={0}
					loadMore={loadMoreMovies}
					hasMore={hasMore}
					threshold={400}
					loader={
						<div className={styles.ListLoading} key={0}>
							Loading ...
						</div>
					}
				>
					{movies.map(movie => (
						<MovieCard
							key={movie.id}
							onClick={openMovieDetail.bind(null, movie.id)}
							movie={movie}
							className={styles.MovieCard}
							background={_resolveImage(movie.backdrop_path)}
						/>
					))}
				</InfiniteScroll>
			</div>
			{detailed.open && <div className={styles.MovieSidePanelContainer}></div>}
			<MovieSide
				className={classNames(styles.MovieSidePanel, {
					[styles.Active]: detailed.open
				})}
				movie={detailed.movie}
				loading={detailed.loading}
				poster={detailed.movie ? _resolvePoster(detailed.movie.poster_path) : undefined}
				onClose={closeMovieDetail}
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
	fetchMovies: () => dispatch({ type: MoviesActions.FETCH_MOVIES, payload: {} }),
	loadMoreMovies: () => dispatch({ type: MoviesActions.LOAD_MORE_MOVIES, payload: {} }),
	openMovieDetail: (id: number) => dispatch({ type: MoviesActions.OPEN_DETAILED, payload: { id } }),
	closeMovieDetail: () => dispatch({ type: MoviesActions.CLOSE_DETAILED, payload: {} })
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
