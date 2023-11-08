import { useCallback } from 'react';
/** Atom */
import { useRecoilState } from 'recoil';
import { SnackAtom } from '@/atom/SnackAtom';

const useSnack = () => {
	const [snack, setSnack] = useRecoilState(SnackAtom)

	const handleOpenSnack = useCallback( (text: string, severity: "error" | "info" | "success" | "warning") => {
		setSnack({ open: true, text: text, severity: severity })
	}, [snack])
	
	const handleCloseSnack = () => {
		setSnack({ ...snack, open: false });
	}

	return { snack, handleOpenSnack, handleCloseSnack }
};

export default useSnack;