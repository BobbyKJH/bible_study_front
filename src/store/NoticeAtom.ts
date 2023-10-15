import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
/** Utils */
import DateFormat from '@utils/dateFormat.ts';
/** Type */
import Bible from '@type/Bible';

const { persistAtom } = recoilPersist({
	key: "Notice_Persist",
	storage: localStorage
});

export const PBSNoticeAtom = atom<Bible.Create>({
	key: "PBS_Notice",
	default: {
		date: DateFormat(new Date()),
		book:       "",
		chapter:    null,
		startVerse: null,
		endVerse:   null,
		content:    "",
		showData:   "Y"
	},
	effects_UNSTABLE: [persistAtom]
});

export const QTNoticeAtom = atom<Bible.Create>({
	key: "QT_Notice",
	default: {
		date: DateFormat(new Date()),
		book:       "",
		chapter:    null,
		startVerse: null,
		endVerse:   null,
		content:    "",
		showData:   "Y"
	},
	effects_UNSTABLE: [persistAtom]
});