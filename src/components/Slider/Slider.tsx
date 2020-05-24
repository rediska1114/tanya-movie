import React from 'react'
import styles from './Slider.module.scss'
import classNames from 'classnames'
import { SliderProps } from './Slider.d'

import Range from '@material-ui/core/Slider'

const Slider: React.FC<SliderProps.Props> = props => {
	const { className, onChange, value, ...otherProps } = props
	const _onChange = (e: any, val: number | number[]) => {
		const val_arr = Array.isArray(val) ? val : [val]
		if (onChange) {
			if (!value || value.join('') !== val_arr.join('')) onChange(val_arr)
		}
	}

	return (
		<Range
			className={classNames(styles.Slider, className)}
			getAriaValueText={value => value + ''}
			valueLabelDisplay='on'
			aria-labelledby='range-slider'
			value={value}
			onChange={_onChange}
			{...otherProps}
		></Range>
	)
}

Slider.defaultProps = {}

// const mapStateToProps = (state: IAppState): SliderProps.Store => ({
// 	...state.root,
// 	...state.Slider
// });

// const mapDispatchToProps: MapDispatchToProps<
// 	SliderProps.Dispatch,
// 	SliderProps.Own
// > = (dispatch: TDispatch) => ({
// 	setTest: (test: test) =>
// 		dispatch({ type: SliderActions.TEST, payload: { test } })
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Slider);

export default Slider
