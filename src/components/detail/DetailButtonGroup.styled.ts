import styled from 'styled-components';
import { Button } from '@mui/material';

export const DetailButtonGroupContainer = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	display: flex;
  padding: 15px 20px;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

export const DetailDeleteButton = styled(Button)`
	font-weight: 700;
	box-sizing: border-box;
  width: 40px;
`

export const DetailEditButton = styled(Button)`
	font-weight: 700;
	margin: 0 10px;
	width: 40px;
  box-sizing: border-box;
	border-radius: 4px;
`