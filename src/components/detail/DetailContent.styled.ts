import styled from 'styled-components';
import { TextField } from '@mui/material';


export const DetailContentMultiTextField = styled(TextField)`
	fieldset{
		border: none;
	}
	
	.MuiInputBase-input.Mui-disabled {
		-webkit-text-fill-color: #000;
		font-weight: 700;
	}
`
