import React, { useRef } from 'react'
import styles from './MovieSide.module.scss'
import classNames from 'classnames'
import { MovieSideProps } from './MovieSide.d'
import { useOnClickOutside } from '../../hooks'
import { getMovieDuration, getMoneys } from '../../utils'

const MovieSide: React.FC<MovieSideProps.Props> = props => {
	const { className, onClose, movie, loading, poster, ...otherProps } = props

	const ref = useRef<HTMLDivElement | null>(null)

	useOnClickOutside(ref, e => {
		if (onClose) onClose()
	})

	const info = [
		{
			title: 'Slogan',
			text: !movie ? '' : movie?.tagline || '–'
		},
		{
			title: 'Rating',
			text: !movie ? '' : movie.vote_average + '/10'
		},
		{
			title: 'Release Date',
			text: !movie ? '' : movie.release_date.split('-').reverse().join('.')
		},
		{
			title: 'Budget',
			text: !movie ? '' : getMoneys(movie.budget)
		},
		{
			title: 'Revenue',
			text: !movie ? '' : getMoneys(movie.revenue)
		},
		{
			title: 'Duration',
			text: !movie ? '' : getMovieDuration(movie.runtime)
		},
		{
			title: 'Genres',
			text: !movie ? '' : movie.genres.map(g => g.name).join(', ') || '-'
		},
		{
			title: 'Cast',
			text: !movie ? '' : movie.credits.cast.map(c => c.name).join(', ') || '-'
		}
	]

	return (
		<div className={classNames(styles.MovieSide, className)} {...otherProps} ref={ref}>
			<div className={styles.Top}>
				<div className={styles.PosterThumb}>
					{poster !== null ? (
						poster === '' ? (
							'Loading...'
						) : (
							<img className={styles.Poster} src={poster} alt='' />
						)
					) : (
						'No Image'
					)}
				</div>
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

export default MovieSide
