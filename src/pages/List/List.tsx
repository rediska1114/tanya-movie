import React from 'react'
import styles from './List.module.scss'
import classNames from 'classnames'
import { ListProps } from './List.d'
import { MovieFilter } from '../../components'

const List: React.FC<ListProps.Props> = props => {
	const { className } = props

	return (
		<div className={classNames(styles.List, className)}>
			<div className={styles.MovieFilterContainer}>
				<MovieFilter className={styles.MovieFilter} type='header' />
			</div>
		</div>
	)
}

List.defaultProps = {}

// const mapStateToProps = (state: IAppState): ListProps.Store => ({
// 	...state.root,
// 	...state.List
// });

// const mapDispatchToProps: MapDispatchToProps<
// 	ListProps.Dispatch,
// 	List.Own
// > = (dispatch: TDispatch) => ({
// 	setTest: (test: test) =>
// 		dispatch({ type: ListActions.TEST, payload: { test } })
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(List);

export default List
