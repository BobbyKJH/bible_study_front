/** React */
import React from 'react';
/** Sha256 */
import { sha256 } from 'js-sha256'
/** Component */
import SideBarText from '@components/common/sideBar/SideBarText.tsx'
import SideBarBible from '@components/common/sideBar/SideBarBible.tsx'
/** Recoil */
import { useRecoilState } from 'recoil'
import { sideBarAtom } from '@/store/SideBarAtom.ts'
/** Style */
import { Box, Divider, Drawer, List, Toolbar } from '@mui/material';
/** Icon */
import { BiHome } from "react-icons/bi";
import { TbClipboardText, TbClipboardList } from "react-icons/tb";
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SideBar: React.FC = () => {
	const [sideBar, setSideBar] = useRecoilState(sideBarAtom);

	const handleCloseSideBar = () => {
		setSideBar(false);
	}


	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List sx={{ paddingTop: 0 }}>
				<SideBarText path={"home"} text={"홈"} Icon={BiHome}/>

				<SideBarBible/>

				<SideBarText path={"pbs"} text={"PBS"} Icon={TbClipboardText}/>

				<SideBarText path={"qt"} text={"QT"} Icon={TbClipboardList}/>

				{sessionStorage.getItem("userAuth") === sha256("admin") && <SideBarText path={"admin"} text={"관리자 권한"} Icon={BsFillPersonLinesFill}/>}
			</List>
		</div>
	);

	return (
		<Box sx={{display: 'flex'}}>
			<Box
				component="nav"
				sx={{width: { md: 200 }, flexShrink: { md: 0 }}}
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
						'& .MuiDrawer-paper': {boxSizing: 'border-box', width: 200},
					}}
				>
					{drawer}
				</Drawer>

				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', md: 'block' },
						'& .MuiDrawer-paper': {boxSizing: 'border-box', width: 200},
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