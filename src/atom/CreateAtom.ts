import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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