import React, { useState } from 'react'
import styles from './MovieFilter.module.scss'
import classNames from 'classnames'
import AnimateHeight from 'react-animate-height'
import { MovieFilterProps } from './MovieFilter.d'
import { connect, MapDispatchToProps } from 'react-redux'
import { IAppState, TDispatch, FilterActions } from '../../store'
import { Button, Chip, Input } from '..'
import Slider from '../Slider'
import { IFilter } from '../../interfaces'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as FilterIcon } from '../../assets/images/ic_filter.svg'
import { Link } from 'react-router-dom'
import { routes } from '../../enums'
import { pure } from '../../utils'

const CURRENT_YEAR = new Date().getFullYear()

const MovieFilter: React.FC<MovieFilterProps.Props> = props => {
	const { className, genres, setValue, filter, onSubmit, type } = props

	const [isGenresOpen, setGenresOpen] = useState<boolean>(false)
	const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)

	const onGenreClick = (id: number) => {
		if (filter.genres.includes(id)) {
			setValue(
				'genres',
				filter.genres.filter(g => g !== id)
			)
		} else {
			setValue('genres', [...filter.genres, id])
		}
	}

	return (
		<div className={classNames(styles.MovieFilter, className)}>
			<div className={styles.Block}>
				{type === 'header' && (
					<Link to={routes.main} className={styles.Logo}>
						<Logo />
					</Link>
				)}
				<Input
					className={styles.Search}
					placeholder='Enter movie title'
					onChange={setValue.bind(null, 'search')}
					value={filter.search}
				/>
				{type === 'header' && (
					<Button
						className={styles.FilterButton}
						onClick={setIsFiltersOpen.bind(null, !isFiltersOpen)}
					>
						<FilterIcon height={24} width={24} />
					</Button>
				)}
				{type === 'block' && (
					<Button className={styles.Button} onClick={onSubmit}>
						Search
					</Button>
				)}
			</div>
			<AnimateHeight
				height={isFiltersOpen || type === 'block' ? 'auto' : 0}
				contentClassName={styles.FilterWrapper}
				easing='ease'
			>
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
								<Chip
									key={id}
									active={filter.genres.includes(id)}
									text={name}
									onClick={onGenreClick.bind(null, id)}
								/>
							))
						)}
					</AnimateHeight>
				</div>

				<div className={styles.Block}>
					<div className={classNames(styles.BlockWithTitle, styles.RatingBlock)}>
						<div className={styles.Title}>Rating</div>

						<Slider
							className={styles.Slider}
							min={0}
							max={10}
							onChange={setValue.bind(null, 'rating')}
							value={filter.rating}
						/>
					</div>

					<div className={classNames(styles.BlockWithTitle, styles.ReleaseBlock)}>
						<div className={styles.Title}>Release</div>

						<Slider
							className={styles.Slider}
							min={1917}
							max={CURRENT_YEAR}
							onChange={setValue.bind(null, 'release')}
							value={filter.release}
						/>
					</div>
				</div>
			</AnimateHeight>
		</div>
	)
}

MovieFilter.defaultProps = {
	type: 'block'
}

const mapStateToProps = (state: IAppState): MovieFilterProps.Store => state.Filters

const mapDispatchToProps: MapDispatchToProps<MovieFilterProps.Dispatch, MovieFilterProps.Own> = (
	dispatch: TDispatch
) => ({
	setValue: (name: keyof IFilter, value: IFilter[typeof name]) =>
		dispatch({ type: FilterActions.SET_VALUE, payload: { name, value } })
})

export default connect(mapStateToProps, mapDispatchToProps)(pure(MovieFilter))
