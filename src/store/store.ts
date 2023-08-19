import { create } from 'zustand'

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