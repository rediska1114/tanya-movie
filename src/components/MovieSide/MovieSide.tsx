import React, { useRef } from 'react'
import styles from './MovieSide.module.scss'
import classNames from 'classnames'
import { MovieSideProps } from './MovieSide.d'
import { useOnClickOutside } from '../../hooks'

const MovieSide: React.FC<MovieSideProps.Props> = props => {
	const { className, onClose, ...otherProps } = props

	const ref = useRef<HTMLDivElement | null>(null)

	useOnClickOutside(ref, e => {
		if (onClose) onClose()

		e.stopPropagation()
	})

	const info = [
		{
			title: 'Slogan',
			text: 'Yo yo Piraka!'
		},
		{
			title: 'Rating',
			text: '10/10'
		},
		{
			title: 'Release Date',
			text: '2008'
		},
		{
			title: 'Duration',
			text: '1:52:00'
		},
		{
			title: 'Genres',
			text: 'Comedy, Action, Criminal'
		},
		{
			title: 'Cast',
			text:
				'Сет Роген, Джеймс Франко, Дэнни МакБрайд, Кевин Корригэн, Крэйг Робинсон, Гэри Коул, Рози Перес, Эд Бегли мл., Нора Данн, Эмбер Хёрд'
		}
	]

	return (
		<div className={classNames(styles.MovieSide, className)} {...otherProps} ref={ref}>
			<div className={styles.Top}>
				<img
					className={styles.Poster}
					src={'https://sun1-15.userapi.com/R4eYN_9NTMtTJe4qSUnm0hy1KOkxtOGjEekP9w/5tZ0gF3kBtM.jpg'}
					alt=''
				/>
				<div className={styles.TitleTextContainer}>
					<div className={styles.Title}>Piraka Movie</div>
					<div className={styles.Text}>
						Раздолбай и любитель травки случайно становится свидетелем убийства и, прихватив своего
						дружка, такого же лузера, как он, пытается свалить из города, спасаясь от Плохих Парней.
						Дело пахнет керосином, ведь мафия решила заставить приятелей замолчать навсегда.
					</div>
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
