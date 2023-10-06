import styled from "styled-components"
import { Box } from '@mui/material'

export const ChartBox = styled(Box)`
	width:50%;
  aspect-ratio: 18 / 9;
	display: inline-flex; 
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 30px;
  @media screen and (max-width: 900px) {
    aspect-ratio: 4 / 3;
	}
`
export const ChartTitle = styled.h1`
  font-size: 1.5rem; 
	font-weight: 900;
`

export const ChartSubTitle = styled.h2`
  font-size: 1rem; 
	font-weight: 700;
`