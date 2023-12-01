import styled, { keyframes } from 'styled-components';
/** Style */
import { TableRow, TableCell } from '@mui/material';

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
	box-sizing: border-box;
	&:hover{
		animation: ${TableRowsBgc} .5s;
    background-color: #80808010;
	}
`

export const NoticeCell = styled(TableCell)`
	font-weight: 700;
`