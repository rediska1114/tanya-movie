import React from 'react'

export const FormItemLoading: React.FC<{ loading: boolean }> = ({ loading, children }) => {
	return <>{loading ? <div>Загрузка...</div> : children}</>
}
