import React from 'react'
import styles from './Chip.module.scss'
import classNames from 'classnames'
import { ChipProps } from './Chip.d'

const Chip: React.FC<ChipProps.Props> = props => {
	const { className, active, text, ...otherProps } = props

	return (
		<div
			className={classNames(styles.Chip, className, {
				[styles.Active]: !!active
			})}
			{...otherProps}
		>
			{text}
		</div>
	)
}

Chip.defaultProps = {}

export default Chip
