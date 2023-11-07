import { atom } from 'recoil';

export const SidebarAtom = atom<boolean>({
	key:"sidebar",
	default: false
});