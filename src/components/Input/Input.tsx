import React from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames'
import { InputProps } from './Input.d'

const Input: React.FC<InputProps.Props> = props => {
	const { className, onChange, ...otherProps } = props

	const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e.target.value)
	}

	return (
		<div className={classNames(styles.Wrapper, className)}>
			<input onChange={_onChange} className={styles.Input} {...otherProps} />
		</div>
	)
}

Input.defaultProps = {}

export default Input
