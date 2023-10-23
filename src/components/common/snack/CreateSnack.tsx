/** React */
import React from 'react'
/** Hook */
import useSnack from '@/hook/useSnack.ts'
/** Atom */
import { CreateSnackAtom } from '@/store/SnackAtom.ts'
/** Style */
import { Alert, Snackbar } from '@mui/material'


const CreateSnack: React.FC = () => {
	const { state, setState } = useSnack(CreateSnackAtom);

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
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					작성 완료 하였습니다.
				</Alert>
			</Snackbar>
	);
}

export default CreateSnack;