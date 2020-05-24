import React, { useState } from 'react'
import styles from './MovieFilter.module.scss'
import classNames from 'classnames'
import AnimateHeight from 'react-animate-height'
import { MovieFilterProps } from './MovieFilter.d'
import { connect, MapDispatchToProps } from 'react-redux'
import { IAppState, TDispatch } from '../../store'
import { Button, Chip, Input } from '..'
import Slider from '../Slider'

const CURRENT_YEAR = new Date().getFullYear()

const MovieFilter: React.FC<MovieFilterProps.Props> = props => {
	const { className, genres } = props

	const [isGenresOpen, setGenresOpen] = useState<boolean>(false)

	const onChange = (name: string, event: React.ChangeEvent<HTMLSelectElement>) => {}
	/*
    поиск по названию фильма
    фильтр по жанру
    фильтр по рейтингу
    фильтр по году
    кнопку, по которой осуществляется поиск (а на первой странице еще и переход ко второй)
    */
	const onGenreClick = (id: number) => {}

	return (
		<div className={classNames(styles.MovieFilter, className)}>
			<div className={styles.Block}>
				<Input className={styles.Search} placeholder='Enter movie title' />
				<Button className={styles.Button}>Search</Button>
			</div>

			<div className={classNames(styles.Block, styles.BlockWithTitle)}>
				<div className={styles.Title}>
					Genres
					<div className={styles.ShowMore} onClick={setGenresOpen.bind(null, !isGenresOpen)}>
						{isGenresOpen ? 'Hide more' : 'Show more'}
					</div>
				</div>
				<AnimateHeight
					height={isGenresOpen ? 'auto' : 52}
					className={styles.GenresContainer}
					contentClassName={styles.Genres}
					easing='ease'
				>
					{!genres ? (
						<div className={styles.Loading}>loading...</div>
					) : (
						genres.map(({ id, name }) => (
							<Chip key={id} active={false} text={name} onClick={onGenreClick.bind(null, id)} />
						))
					)}
				</AnimateHeight>
			</div>

			<div className={styles.Block}>
				<div className={classNames(styles.BlockWithTitle, styles.RatingBlock)}>
					<div className={styles.Title}>Rating</div>

					<Slider className={styles.Slider} min={0} max={10} defaultValue={[0, 10]} />
				</div>

				<div className={classNames(styles.BlockWithTitle, styles.ReleaseBlock)}>
					<div className={styles.Title}>Release</div>

					<Slider
						className={styles.Slider}
						min={1917}
						max={CURRENT_YEAR}
						defaultValue={[1917, CURRENT_YEAR]}
					/>
				</div>
			</div>
		</div>
	)
}

MovieFilter.defaultProps = {}

const mapStateToProps = (state: IAppState): MovieFilterProps.Store => state.Filters

const mapDispatchToProps: MapDispatchToProps<MovieFilterProps.Dispatch, MovieFilterProps.Own> = (
	dispatch: TDispatch
) => ({
	// setTest: (test: test) =>
	//     dispatch({ type: MovieFilterActions.TEST, payload: { test } })
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieFilter)
