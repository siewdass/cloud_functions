import React, { CSSProperties, ReactElement, useState } from 'react'

export function Loader( props ) {


	const style: CSSProperties = { 
		display: 'flex',

	}

	return (
		<div className="loader">

    </div>
	)
}

/*

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}


@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

*/