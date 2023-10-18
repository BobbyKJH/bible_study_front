import { atom } from 'recoil';

export const sideBarAtom = atom<boolean>({
	key: "sideBar",
	default: false
});