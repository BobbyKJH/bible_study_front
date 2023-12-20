import React from 'react';
/** Component */
import SidebarPath from '@components/sidebar/SidebarPath.tsx';
import SidebarBible from '@components/sidebar/SidebarBible.tsx';
/** Atom */
import { useRecoilState } from 'recoil';
import { SidebarAtom } from '@/atom/SidebarAtom.ts';
/** Style */
import { Drawer, Toolbar } from '@mui/material';
import { MobileSidebarToolbar } from '@components/sidebar/Sidebar.styled.ts';
/** Icon */
import { BsFillPersonFill } from 'react-icons/bs';
import { TbClipboardList, TbClipboardText, TbHome } from 'react-icons/tb';

const Sidebar: React.FC = () => {
	const [sidebar, setSidebar] = useRecoilState(SidebarAtom);

	const handleCloseSidebar = () => {
		setSidebar(false);
	}

	return (
		<>
			<Drawer
				variant="permanent"
				open
				sx={{
					width: 230,
					flexShrink: 0,
					display: { xs: "none", md: "block" },
					[`& .MuiDrawer-paper`]: { width: 230, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />

				<SidebarPath text={"홈"} path={""} page={"home"} Icon={TbHome}/>

				<SidebarBible/>

				<SidebarPath text={"PBS"} path={"/pbs?page=1&book="} page={"pbs"} Icon={TbClipboardList}/>

				<SidebarPath text={"QT"} path={"/qt?page=1&book="} page={"qt"} Icon={TbClipboardText}/>

				{sessionStorage.getItem("auth") === "ADMIN" && <SidebarPath text={"관리자 권한"} path={"/admin"} page={"admin"} Icon={BsFillPersonFill}/>}
			</Drawer>

			{/* Mobile Sidebar */}
			<Drawer
				variant="temporary"
				onClose={handleCloseSidebar}
				open={sidebar}
				sx={{
					width: 230,
					flexShrink: 0,
					display: { xs: "block", md: "none" },
					[`& .MuiDrawer-paper`]: { width: 230, boxSizing: 'border-box' },
				}}
			>
				<MobileSidebarToolbar />

				<SidebarPath text={"홈"} path={""} page={"home"} Icon={TbHome}/>

				<SidebarBible/>

				<SidebarPath text={"PBS"} path={"/pbs?page=1&book="} page={"pbs"} Icon={TbClipboardList}/>

				<SidebarPath text={"QT"} path={"/qt?page=1&book="} page={"qt"} Icon={TbClipboardText}/>

				{sessionStorage.getItem("auth") === "ADMIN" && <SidebarPath text={"관리자 권한"} path={"/admin"} page={"admin"} Icon={BsFillPersonFill}/>}
			</Drawer>
		</>
	);
};

export default Sidebar;