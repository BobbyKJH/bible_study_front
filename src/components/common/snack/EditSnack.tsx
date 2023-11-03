/** React */
import React from 'react';
/** Hook */
import useSnack from '@/hook/useSnack.ts'
/** Atom */
import { EditSnackAtom } from '@/store/SnackAtom.ts'
/** Style */
import { Alert, Snackbar } from '@mui/material'


const EditSnack: React.FC = () => {
	const { state, setState} = useSnack(EditSnackAtom);
	const { vertical, horizontal, open } = state;

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			autoHideDuration={1000}
			onClose={handleClose}
			key={vertical + horizontal}
		>
			<Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
				수정완료 하였습니다.
			</Alert>
		</Snackbar>
	);
}

export default React.memo(EditSnack);