import styled from 'styled-components';
import { FormHelperText, OutlinedInput } from '@mui/material';

export const EditVerseField = styled(OutlinedInput)`
	width: 100px;
  fieldset{
		border: none;
	}
	::-webkit-inner-spin-button{
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
    }
	}
`

export const EditVerseError = styled(FormHelperText)`
	color: #ff0000;
	position: absolute;
	bottom: -10px;
`