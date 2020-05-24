import React from 'react'
import styles from './Slider.module.scss'
import { ValueLabelProps } from '@material-ui/core'

export const SliderValueLabel: React.FC<ValueLabelProps> = ({ value }) => {
	return <span className={styles.SliderValueLabel}>{value}</span>
}
