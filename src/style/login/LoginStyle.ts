/** React */
import { Link } from 'react-router-dom'
/** Style */
import styled from 'styled-components'
import { Container, Paper } from '@mui/material'

export const LoginContainer = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1000px;
`

export const LoginPaper = styled(Paper)`
	display: flex;
  flex-direction:column;
	gap:50px;
	justify-content: center;
	align-items: center;
	height: 500px;
	width: 100%;
	margin-top: 100px;
`

export const LoginTitle = styled.h1`
	font-size: 1.8rem;
	font-weight: 900;
`

export const LoginBtn = styled.button`
	display: block;
	width: 100%;
	margin-top: 40px;
	padding: 20px;
	border: none;
`

export const LoginCreateBtn = styled(Link)`
	color: #808080;
	&: hover {
		text-decoration: underline;
	}
`

export const LoginAlert = styled.p`
	color: #ff0000;
	position: absolute;
	padding: 5px 0;
`