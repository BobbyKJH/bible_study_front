import styled from 'styled-components';
import { Alert, Snackbar } from '@mui/material';

export const SnackContainer = styled(Snackbar)`
  width: 160px;
	@media(max-width: 899px){
    bottom: 90px;
	}
`

export const SnackAlert = styled(Alert)`
	width: 100%;
	font-weight: 900;
`