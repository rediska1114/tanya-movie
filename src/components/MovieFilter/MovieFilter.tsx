import React from 'react'
import styles from './MovieFilter.module.scss'
import classNames from 'classnames'
import { MovieFilterProps } from './MovieFilter.d'
import { connect, MapDispatchToProps } from 'react-redux'
import { IAppState, TDispatch } from '../../store'
import { FormItemLoading } from './FormItemLoading'

const MovieFilter: React.FC<MovieFilterProps.Props> = props => {
	const { className, genres } = props

	const onChange = (name: string, event: React.ChangeEvent<HTMLSelectElement>) => {}
	/*
    поиск по названию фильма
    фильтр по жанру
    фильтр по рейтингу
    фильтр по году
    кнопку, по которой осуществляется поиск (а на первой странице еще и переход ко второй)
    */

	return (
		<div className={classNames(styles.MovieFilter, className)}>
			<input />
			<FormItemLoading loading={!genres}>
				<select onChange={onChange.bind(null, 'genre')}>
					{genres?.map(({ id, name }) => (
						<option key={id} value={id}>
							{name}
						</option>
					))}
				</select>
			</FormItemLoading>
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
