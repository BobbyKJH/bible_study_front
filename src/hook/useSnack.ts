/** Atom */
import { RecoilState, useRecoilState } from 'recoil'
/** Type */
import { SnackbarOrigin } from '@mui/material/Snackbar'

interface Props {
	open: boolean;
	vertical: "top" | "bottom";
	horizontal: "right" | "left" | "center"

}

const useSnack = (initialAtom: RecoilState<Props>) => {
	const [state, setState] = useRecoilState(initialAtom);

	const handleSnackClick = (newState: SnackbarOrigin) => () => {
		setState({ ...newState, open: true });
	};

	return { state, setState, handleSnackClick };
};

export default useSnack;