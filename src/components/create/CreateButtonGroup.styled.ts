import SpeedDial from '@mui/material/SpeedDial';
import styled from 'styled-components';

interface Props {
	bottom: number;
	bgc: string;
}

export const PbsTempButton = styled(SpeedDial)<Props>`
	position: fixed;
	bottom: 30px;
	right: ${({bottom}) => bottom}px;
  .MuiSpeedDial-fab{
		background-color: ${({bgc}) => bgc};
	}
`

export const PbsCreateButton = styled.button`
	background-color: #00000000;
	border: none;
	color: #fff;
`