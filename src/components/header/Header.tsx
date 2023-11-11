import React from 'react';
/** Atom */
import { useSetRecoilState } from 'recoil';
import { SidebarAtom } from '@/atom/SidebarAtom.ts';
/** Style */
import { CssBaseline, AppBar, Typography, IconButton, Tooltip } from '@mui/material';
import { HeaderIcon, HeaderIconBox, HeaderTitle, HeaderToolbar } from '@components/header/Header.styled.ts';
/** Icon */
import { BiLogIn } from "react-icons/bi";
import { LuAlignJustify } from "react-icons/lu";
import { BsPersonLinesFill } from "react-icons/bs";

const Header: React.FC = () =>  {
	const setSidebar = useSetRecoilState(SidebarAtom);

	const handleOpenSidebar = () => {
		setSidebar(true);
	}

	return (
		<>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<HeaderToolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						sx={{ display: { xs: "flex", md: "none" }}}
						onClick={handleOpenSidebar}
					>
						<LuAlignJustify/>
					</IconButton>

					<HeaderTitle to={"/home"}>
						<Typography variant="h6" fontWeight={"900"} component="div">
							주은혜 교회
						</Typography>
					</HeaderTitle>

					<HeaderIconBox>
						<Tooltip title={"마이페이지"}>
							<HeaderIcon to={"/home/myPage"}>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="start"
								>
									<BsPersonLinesFill/>
								</IconButton>
							</HeaderIcon>
						</Tooltip>

						<Tooltip title={"로그아웃"}>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
							>
								<BiLogIn/>
							</IconButton>
						</Tooltip>
					</HeaderIconBox>

				</HeaderToolbar>
			</AppBar>
		</>



	);
}

export default Header