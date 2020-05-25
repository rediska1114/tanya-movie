import React from 'react'
import styles from './MovieCard.module.scss'
import classNames from 'classnames'
import { MovieCardProps } from './MovieCard.d'
import { pure } from '../../utils'

const MovieCard: React.FC<MovieCardProps.Props> = props => {
	const { className, movie, background, ...otherProps } = props

	return (
		<div className={classNames(styles.MovieCard, className)} {...otherProps}>
			{background && (
				<div className={styles.Background}>
					<img src={background} alt='' />
				</div>
			)}
			<div className={styles.Content}>
				<div className={styles.Title}>{movie.title}</div>

				<div className={styles.Info}>
					<span className={styles.Year}>{movie.release_date.split('-')[0]}</span>
					<span className={styles.Rating}>{movie.vote_average.toFixed(1)}/10</span>
				</div>

				<div className={styles.Text}>{movie.overview}</div>
			</div>
		</div>
	)
}

MovieCard.defaultProps = {}

export default pure(MovieCard)
