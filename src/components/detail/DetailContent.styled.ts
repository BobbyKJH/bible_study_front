import styled from 'styled-components';
import { TextField } from '@mui/material';


export const DetailContentMultiTextField = styled(TextField)`
	fieldset{
		border: none;
		background-color: #80808005;
		border-radius: 5px;
	}
	
	.MuiInputBase-input.Mui-disabled {
		-webkit-text-fill-color: #000;
	}
`
