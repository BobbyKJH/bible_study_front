import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

/** Pbs 임시저장 */
const { persistAtom: pbsStorage } = recoilPersist({
	key: "Pbs.Storage",
	storage: sessionStorage
});

export const PbsAtom = atom({
	key: "Pbs/Storage",
	default: {
		book: null,
		startVerse: null,
		endVerse: null,
		chapter: null,
		content: "",
		showData: "Y"
	},
	effects_UNSTABLE: [pbsStorage]
})

/** Qt 임시저장 */
const { persistAtom: qtStorage } = recoilPersist({
	key: "Qt.Storage",
	storage: sessionStorage
});

export const QtAtom = atom({
	key: "Qt/Storage",
	default: {
		book: null,
		startVerse: null,
		endVerse: null,
		chapter: null,
		content: "",
		showData: "Y"
	},
	effects_UNSTABLE: [qtStorage]
})