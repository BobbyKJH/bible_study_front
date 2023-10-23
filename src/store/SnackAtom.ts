import { atom } from 'recoil'

interface Props {
	open: boolean;
	vertical: "top" | "bottom";
	horizontal: "center" | "right" | "left";
}

export const CreateSnackAtom = atom<Props>({
	key: "create_snack",
	default: {
		open: false,
		vertical: 'top',
		horizontal: 'center',
	}
});

export const DeleteSnackAtom = atom<Props>(
	{
		key: "delete_snack",
		default: {
			open: false,
			vertical: 'top',
			horizontal: 'center',
		}
	}
)