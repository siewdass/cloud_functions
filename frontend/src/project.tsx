import React, { useEffect, useState } from 'react'
import { Box, Row, Col, Table, Button, Text } from './ui'
import { Request } from './services/request'
import { Input } from './ui/input'
import { useForm } from './library/form'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Theme } from './services/theme'

import { Navbar } from './components/navbar'

export function Project() {
	const navigate = useNavigate( )
	const { color, light } = Theme()
	const [ view, setView ] = useState( 'create' )

	const [ login, onLogin ] = useForm( {
		name: {
			type: 'text',
			required: { value: true, message: 'Required' },
			minLength: { value: 4, message: 'Min 4 characters' }
		},
		description: {
			type: 'text',
			required: { value: true, message: 'Required' },
			minLength: { value: 4, message: 'Min 4 characters' }
		},
		repository: {
			type: 'text',
			required: { value: true, message: 'Required' },
			minLength: { value: 4, message: 'Min 4 characters' }
		},
		branch: {
			type: 'text',
			required: { value: true, message: 'Required' },
			minLength: { value: 4, message: 'Min 4 characters' }
		}
	} )

	useEffect( ()=> {
		//localStorage.clear( )
		if ( localStorage.getItem( 'token' ) === null ) navigate( '/user' )
 	}, [])

	const submit = data => {
		console.log( data )
    //Request( 'POST', '/project', { project, repository, branch } )
	}

	return (
		<Box>
			<Navbar />

			{ view === 'create' ? 		
				<Col gap={ 20 }  grow padding={ 20 }>
					<Text label={ 'Create new project' } size={ 20 }/>
					<Input name={ 'name' } form={ login } />
					<Input name={ 'description' } form={ login } />
					<Input name={ 'repository' } form={ login } />
					<Input name={ 'branch' } form={ login } />
				</Col> :
				null
			}
		</Box>
	)
}

/*
const rows = [ 
	{ label: 'name' },
	{ label: 'age' },
	{ label: 'sex' }
]

const columns = [
	{ dada: 1, name: 'sam', age: 34, sex: 'male' },
	{ name: 'dan', color: 1, age: 31, sex: 'female' }
]
<Table rows={ rows } columns={ columns } />
*/