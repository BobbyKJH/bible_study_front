/** React */
import React from 'react';
/** Hook */
import useSnack from '@/hook/useSnack.ts'
/** Atom */
import { DeleteSnackAtom } from '@/store/SnackAtom.ts'
/** Style */
import { Alert, Snackbar } from '@mui/material'


const DeleteSnack: React.FC = () => {
	const { state, setState } = useSnack(DeleteSnackAtom);
	const { vertical, horizontal, open } = state;

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			autoHideDuration={4000}
			onClose={handleClose}
			key={vertical + horizontal}
		>
			<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
				삭제 하였습니다.
			</Alert>
		</Snackbar>
	);
}

export default React.memo(DeleteSnack);