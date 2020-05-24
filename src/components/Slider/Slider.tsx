import React from 'react'
import styles from './Slider.module.scss'
import classNames from 'classnames'
import { SliderProps } from './Slider.d'

import Range from '@material-ui/core/Slider'
import { SliderValueLabel } from './SliderValueLabel'

const Slider: React.FC<SliderProps.Props> = props => {
	const { className, ...otherProps } = props

	return (
		<Range
			className={classNames(styles.Slider, className)}
			getAriaValueText={value => value + ''}
			valueLabelDisplay='on'
			aria-labelledby='range-slider'
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
