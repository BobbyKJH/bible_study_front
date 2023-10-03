import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UseHeader {
	sideBar: boolean;
	handleOpenSideBar: () => void;
	handleCloseSideBar: () => void;
}

/** SideBar State */
export const useSideBar = create<UseHeader>((set) => ({
	sideBar: false,
	handleOpenSideBar: () => set({ sideBar: true }),
	handleCloseSideBar: () => set({ sideBar: false }),
}));

interface PBSCreateProps {
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

/** PBS 생성 */
export const usePBSCreate = create<PBSCreateProps>()(
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
			name: 'pbs-create',
			// storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
		}
	)
)