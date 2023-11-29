import styled, { keyframes } from 'styled-components';
import { TableRow } from '@mui/material';

const TableRowsBgc = keyframes`
	0%{
		background-color: #fff;
	}
	100%{
    background-color: #80808010;
	}
`

export const NoticeRow = styled(TableRow)`
	cursor: pointer;
	&:hover{
		animation: ${TableRowsBgc} .5s;
    background-color: #80808010;
	}
`