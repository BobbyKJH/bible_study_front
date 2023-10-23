import { Alert } from '@mui/material'
import React from 'react';
import useSnack from '@/hook/useSnack.ts'
import { DeleteSnackAtom } from '@/store/SnackAtom.ts'
import Snackbar from '@mui/material/Snackbar';


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
			onClose={handleClose}
			key={vertical + horizontal}
		>
			<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
				삭제 하였습니다.
			</Alert>
		</Snackbar>
	);
}

export default DeleteSnack;