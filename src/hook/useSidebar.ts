/** Atom */
import { useRecoilState } from 'recoil';
import { SidebarAtom } from '@/atom/SidebarAtom';

const useSidebar = () => {
	const [sidebar, setSidebar] = useRecoilState(SidebarAtom);

	const handleOpenSidebar = () => {
		setSidebar(true);
	};

	const handleCloseSidebar = () => {
		setSidebar(false);
	};

	return { sidebar, handleOpenSidebar, handleCloseSidebar }
};

export default useSidebar;