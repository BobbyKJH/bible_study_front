/** React */
import React from 'react';
/** Sha256 */
import { sha256 } from 'js-sha256'
/** Component */
import SideBarText from '@components/common/sideBar/SideBarText.tsx'
import SideBarBible from '@components/common/sideBar/SideBarBible.tsx'
/** Recoil */
import { useRecoilState, useResetRecoilState } from 'recoil'
import { sideBarAtom } from '@/store/SideBarAtom.ts'
import { PBSPageAtom, PBSSearchAtom, QTPageAtom, QTSearchAtom } from '@/store/NoticeAtom.ts'
/** Style */
import { Box, Divider, Drawer, List, Toolbar } from '@mui/material';
/** Icon */
import { BiHome } from "react-icons/bi";
import { TbClipboardText, TbClipboardList } from "react-icons/tb";
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SideBar: React.FC = () => {
	const [sideBar, setSideBar] = useRecoilState(sideBarAtom);

	const resetPagePBS = useResetRecoilState(PBSPageAtom);
	const resetSearchPBS = useResetRecoilState(PBSSearchAtom);

	const resetPageQT = useResetRecoilState(QTPageAtom);
	const resetSearchQT = useResetRecoilState(QTSearchAtom);

	const handleCloseSideBar = (): void => {
		setSideBar(false);
	};

	const handleClosePBS = (): void => {
		setSideBar(false);
		resetPagePBS();
		resetSearchPBS();
	};

	const handleCloseQT = (): void => {
		setSideBar(false);
		resetPageQT();
		resetSearchQT();
	}

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List sx={{ paddingTop: 0 }}>
				<SideBarText path={"home"} text={"홈"} Icon={BiHome} handleClose={handleCloseSideBar}/>

				<SideBarBible/>

				<SideBarText path={"pbs"} text={"PBS"} Icon={TbClipboardText} handleClose={handleClosePBS}/>

				<SideBarText path={"qt"} text={"QT"} Icon={TbClipboardList} handleClose={handleCloseQT}/>

				{
					sessionStorage.getItem("userAuth") === sha256("admin")
					&&
					<SideBarText path={"admin"} text={"관리자 권한"} Icon={BsFillPersonLinesFill} handleClose={handleCloseSideBar}/>}
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