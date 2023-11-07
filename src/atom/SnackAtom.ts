import { atom } from 'recoil';

interface Props {
	open: boolean;
	text: string;
	severity: "error" | "info" | "success" | "warning";
}

export const SnackAtom = atom<Props>({
	key: "Snack",
	default: {
		open: false,
		text: "",
		severity: "success"
	}
})