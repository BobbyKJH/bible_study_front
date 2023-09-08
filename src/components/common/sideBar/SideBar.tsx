/** React */
import React from 'react';
/** Component */
import SideBarText from '@components/common/sideBar/SideBarText.tsx'
import SideBarBible from '@components/common/sideBar/SideBarBible.tsx'
/** Zustand */
import { useSideBar } from '@/store/store.ts'
/** Style */
import { Box, Divider, Drawer, List, Toolbar } from '@mui/material';
/** Icon */
import { BiHome } from "react-icons/bi";
import { TbClipboardText, TbClipboardList } from "react-icons/tb";

const SideBar: React.FC = () => {
	const { handleCloseSideBar, sideBar } = useSideBar();


	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List sx={{ paddingTop: 0 }}>
				<SideBarText path={""} text={"홈"} icon={BiHome}/>

				<SideBarBible/>

				<SideBarText path={"pbs"} text={"PBS"} icon={TbClipboardText}/>

				<SideBarText path={"qt"} text={"QT"} icon={TbClipboardList}/>

			</List>
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<Box
				component="nav"
				sx={{ width: { md: 200 }, flexShrink: { md: 0 } }}
			>
				<Drawer
					variant="temporary"
					open={sideBar}
					onClose={handleCloseSideBar}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', md: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
					}}
				>
					{drawer}
				</Drawer>

				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', md: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

export default SideBar;