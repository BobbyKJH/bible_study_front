import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import DateFormat from '@utils/dateFormat.ts'

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
		date:        string;
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
				date:       DateFormat(new Date()),
				content:    "",
				showData:   "Y"
			},

			savePBS: (object) => set(() => ({ pbs: object })),

			clearPBS: () => set((): any => ({ pbs: {
					book:       "",
					chapter:    "",
					startVerse: "",
					endVerse:   "",
					date:       DateFormat(new Date()),
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