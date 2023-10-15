import { atom } from 'recoil';

export const sideBarAtom = atom<boolean>({
	key: "sidebar",
	default: false
});