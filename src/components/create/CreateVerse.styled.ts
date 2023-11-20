import styled from 'styled-components';
import { FormHelperText, OutlinedInput } from '@mui/material';

export const TextFieldVerse = styled(OutlinedInput)`
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

export const TextFieldVerseError = styled(FormHelperText)`
	color: #ff0000;
`