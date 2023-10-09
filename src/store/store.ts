import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UseHeader {
	sideBar: boolean;
	handleOpenSideBar: () => void;
	handleCloseSideBar: () => void;
}

interface PBSSaveProps {
	pbs: {
		book:        string;
		chapter:     number | null;
		startVerse:  number | null;
		endVerse:    number | null;
		content:     string;
		showData:    string;
	},
	savePBS: (object: any) => void,
	clearPBS: any
}

interface QTSaveProps {
	qt: {
		book:        string;
		chapter:     number | null;
		startVerse:  number | null;
		endVerse:    number | null;
		content:     string;
		showData:    string;
	},
	saveQT: (object: any) => void,
	clearQT: any
}

/** SideBar State */
export const useSideBar = create<UseHeader>((set) => ({
	sideBar: false,
	handleOpenSideBar: () => set({ sideBar: true }),
	handleCloseSideBar: () => set({ sideBar: false }),
}));


/** PBS 임시저장 */
export const usePBSCreate = create<PBSSaveProps>()(
	persist(
		(set) => ({
			pbs: {
				book:       "",
				chapter:    null,
				startVerse: null,
				endVerse:   null,
				content:    "",
				showData:   "Y"
			},

			savePBS: (object) => set(() => ({ pbs: object })),

			clearPBS: () => set((): any => ({ pbs: {
					book:       "",
					chapter:    "",
					startVerse: "",
					endVerse:   "",
					content:    "",
					showData:   "Y"
				} }))
		}),

		{
			name: 'pbs-save',
		}
	)
)

/** QT 임시저장 */
export const useQTCreate = create<QTSaveProps>()(
	persist(
		(set) => ({
			qt: {
				book:       "",
				chapter:    null,
				startVerse: null,
				endVerse:   null,
				content:    "",
				showData:   "Y"
			},

			saveQT: (object) => set(() => ({ qt: object })),

			clearQT: () => set((): any => ({ qt: {
					book:       "",
					chapter:    "",
					startVerse: "",
					endVerse:   "",
					content:    "",
					showData:   "Y"
				} }))
		}),

		{
			name: 'qt-save',
		}
	)
)