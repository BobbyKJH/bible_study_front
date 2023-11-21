import { atom } from 'recoil';

interface Props {
	open: boolean;
	vertical: "bottom" | "top";
	horizontal: "right" | "left" | "center";
	severity: "success" | "warning" | "error" | "info";
	message: string;
}

export const SnackAtom = atom<Props>({
	key: "snack",
	default: {
		open: false,
		vertical: "bottom",
		horizontal: "left",
		message: "",
		severity: "success"
	}
})