import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { ButtonProps } from './Button.d'
import { pure } from '../../utils'

const Button: React.FC<ButtonProps.Props> = props => {
	const { className, children, ...othersProps } = props

	return (
		<div className={classNames(styles.Button, className)} {...othersProps}>
			{children}
		</div>
	)
}

Button.defaultProps = {}

export default pure(Button)
