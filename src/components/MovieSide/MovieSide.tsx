import React, { useRef } from 'react'
import styles from './MovieSide.module.scss'
import classNames from 'classnames'
import { MovieSideProps } from './MovieSide.d'
import { useOnClickOutside } from '../../hooks'
import { getMovieDuration, getMoneys, pure } from '../../utils'

const MovieSide: React.FC<MovieSideProps.Props> = props => {
	const { className, onClose, movie, loading, poster, ...otherProps } = props

	const ref = useRef<HTMLDivElement | null>(null)

	useOnClickOutside(ref, e => {
		if (onClose) onClose()
	})

	const info = movie
		? [
				{
					title: 'Slogan',
					text: movie.tagline || '–'
				},
				{
					title: 'Rating',
					text: movie.vote_average + '/10'
				},
				{
					title: 'Release Date',
					text: movie.release_date.split('-').reverse().join('.')
				},
				{
					title: 'Budget',
					text: getMoneys(movie.budget)
				},
				{
					title: 'Revenue',
					text: getMoneys(movie.revenue)
				},
				{
					title: 'Duration',
					text: getMovieDuration(movie.runtime)
				},
				{
					title: 'Genres',
					text: movie.genres.map(g => g.name).join(', ')
				},
				{
					title: 'Cast',
					text: movie.credits.cast.map(c => c.name).join(', ')
				}
		  ]
		: []

	return (
		<div className={classNames(styles.MovieSide, className)} {...otherProps} ref={ref}>
			<div className={styles.Top}>
				<img className={styles.Poster} src={poster} alt='' />
				<div className={styles.TitleTextContainer}>
					<div className={styles.Title}>{movie?.title}</div>
					<div className={styles.Text}>{movie?.overview}</div>
				</div>
			</div>
			<div className={styles.Info}>
				{info.map(({ title, text }) => (
					<div key={title} className={styles.InfoRow}>
						<span className={styles.InfoTitle}>{title}</span>
						<span className={styles.InfoText}>{text}</span>
					</div>
				))}
			</div>
		</div>
	)
}

MovieSide.defaultProps = {}

export default pure(MovieSide)
