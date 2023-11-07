"use client"
import React from 'react';
/** Hook */
import useSidebar from '@/hook/useSidebar';
/** Component */
import SidebarBible from '@/components/common/sidebar/SidebarBible';
import SidebarText from '@/components/common/sidebar/SidebarText';
/** Style */
import { Divider, Drawer, Toolbar } from '@mui/material';
/** Icon */
import { BiHome } from "react-icons/bi";
import { TbClipboardText, TbClipboardList } from "react-icons/tb";
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Sidebar: React.FC = () => {
	const { sidebar, handleCloseSidebar } = useSidebar();
	return (
		<>
			<Drawer
				sx={{
					width: 230,
					flexShrink: 0,
					display: { xs: 'none', md: 'block' },
					'& .MuiDrawer-paper': {
						width: 230,
						boxSizing: 'border-box',
					},
				}}
				variant="permanent"
			>
				<Toolbar />

				<SidebarText href={""} text={"홈"} Icon={BiHome}/>

				<SidebarBible/>

				<SidebarText href={"pbs"} text={"PBS"} Icon={TbClipboardText}/>

				<SidebarText href={"qt"} text={"QT"} Icon={TbClipboardList}/>

				<SidebarText href={"admin"} text={"관리자 권한"} Icon={BsFillPersonLinesFill}/>

				<Divider />
			</Drawer>

			<Drawer
				sx={{
					width: 200,
					flexShrink: 0,
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': {
						width: 200,
						boxSizing: 'border-box',
					},
				}}
				open={sidebar}
				onClose={handleCloseSidebar}
				variant="temporary"
			>
				<Toolbar />

				<SidebarText href={""} text={"홈"} Icon={BiHome}/>

				<SidebarBible/>

				<SidebarText href={"pbs"} text={"PBS"} Icon={TbClipboardText}/>

				<SidebarText href={"qt"} text={"QT"} Icon={TbClipboardList}/>

				<SidebarText href={"admin"} text={"관리자 권한"} Icon={BsFillPersonLinesFill}/>

				<Divider />

			</Drawer>
		</>
	);
};

export default Sidebar;