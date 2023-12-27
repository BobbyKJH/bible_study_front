/** Atom */
import { SnackAtom } from '@/atom/SnackAtom.ts';
import { useRecoilState } from 'recoil';

interface Props {
	message: string;
	severity: "success" | "warning" | "error" | "info";
}

const useSnack = () => {
	const [snack, setSnack] = useRecoilState(SnackAtom);

	const handleOpenSnack = (newState: Props) => {
		setSnack({...newState, horizontal: "left", vertical: "bottom", open: true});
	}

	const handleCloseSnack = () => {
		setSnack({...snack, open: false});
	}

	return { snack, setSnack, handleOpenSnack, handleCloseSnack }
};

export default useSnack;