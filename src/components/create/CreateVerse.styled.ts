import styled from 'styled-components';
import { FormHelperText, OutlinedInput } from '@mui/material';

export const CreateVerseField = styled(OutlinedInput)`
	width: 100px;
  fieldset{
		border: none;
	}
	::-webkit-inner-spin-button{
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
    }
`

export const CreateVerseError = styled(FormHelperText)`
	color: #ff0000;
	position: absolute;
	bottom: -10px;
`