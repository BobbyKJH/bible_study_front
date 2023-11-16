import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Toolbar } from '@mui/material';

export const HeaderTitle = styled(Link)`
	color: #fff;
	padding-left: 20px;
`

export const HeaderToolbar = styled(Toolbar)`
	height: 64px;
	padding: 10px;
	padding: 0 10px;
	box-sizing: border-box;
	justify-content: space-between;
`

export const HeaderIconBox = styled.div`
	display: flex;
	width: 70px;
	justify-content: space-between;
`

export const HeaderIcon = styled(Link)`
	color: #fff;
`
