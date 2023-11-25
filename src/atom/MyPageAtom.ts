import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist(
	{
		storage: sessionStorage
	}
);

export const MyPageNotice = atom<string>({
	key: "MyPageNotice",
	default: "pbs",
	effects_UNSTABLE: [persistAtom]
})