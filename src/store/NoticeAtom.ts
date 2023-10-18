import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
/** Type */
import Bible from '@type/Bible';

const { persistAtom } = recoilPersist({
	key: "Notice_Persist",
	storage: localStorage
});

export const PBSNoticeAtom = atom<Bible.Create>({
	key: "PBS_Notice",
	default: {
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
		book:       "",
		chapter:    null,
		startVerse: null,
		endVerse:   null,
		content:    "",
		showData:   "Y"
	},
	effects_UNSTABLE: [persistAtom]
});

const { persistAtom: sessionAtom } = recoilPersist({
	key: "Notice_Page",
	storage: sessionStorage
});

/** PBS Page Search Atom */
export const PBSPageAtom = atom<number>({
	key: "pbs_notice_page",
	default: 1,
	effects_UNSTABLE: [sessionAtom]
})

export const PBSSearchAtom = atom<string>({
	key: "pbs_notice_search",
	default: "",
	effects_UNSTABLE: [sessionAtom]
})

/** QT Page Search Atom */
export const QTPageAtom = atom<number>({
	key: "qt_notice_page",
	default: 1,
	effects_UNSTABLE: [sessionAtom]
})

export const QTSearchAtom = atom<string>({
	key: "qt_notice_search",
	default: "",
	effects_UNSTABLE: [sessionAtom]
})
