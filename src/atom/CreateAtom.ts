import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
/** Type */
import Bible from '@/type/Bible';

const localStorage = typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom: pbsAtom } = recoilPersist({
	key: "create/pbs",
	storage: localStorage,
});

export const PbsCreateAtom = atom<Bible.Create>({
	key: "create_pbs",
	default: {
		book: "",
		chapter: null,
		startVerse: null,
		endVerse: null,
		content: "",
		showData: "Y"
	},
	effects_UNSTABLE: [pbsAtom]
});

const { persistAtom: qtAtom } = recoilPersist({
	key: "create/qt",
	storage: localStorage,
});

export const QtCreateAtom = atom<Bible.Create>({
	key: "create_qt",
	default: {
		book: "",
		chapter: null,
		startVerse: null,
		endVerse: null,
		content: "",
		showData: "Y"
	},
	effects_UNSTABLE: [qtAtom]
});