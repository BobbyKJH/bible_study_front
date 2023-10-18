import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom: sessionAtom } = recoilPersist({
	key: "MyPage",
	storage: sessionStorage
});

export const MyPagePBSAtom = atom<number>({
	key: "MyPage_PBS_Page",
	default: 1,
	effects_UNSTABLE: [sessionAtom]
});

export const MyPagePBSSearchAtom = atom<string>({
	key: "MyPage_PBS_Search",
	default: "",
	effects_UNSTABLE: [sessionAtom]
});

export const MyPageQTAtom = atom<number>({
	key: "MyPage_QT_Page",
	default: 1,
	effects_UNSTABLE: [sessionAtom]
});

export const MyPageQTSearchAtom = atom<string>({
	key: "MyPage_QT_Search",
	default: "",
	effects_UNSTABLE: [sessionAtom]
});