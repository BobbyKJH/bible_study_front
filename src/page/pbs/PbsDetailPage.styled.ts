import styled from 'styled-components';
import { Container } from '@mui/material';

export const PbsDetailContainer = styled(Container)`
	padding: 0;
	box-sizing: border-box;
	position: relative;
`;

export const PbsDetailTitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 20px;
	div{
		font-weight: 700;
	}
`

export const PbsDetailSubTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: right;
`

export const PbsCreateDate = styled.div`
	display: block;
`