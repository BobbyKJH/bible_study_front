"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
/** Hook */
import useSidebar from '@/hook/useSidebar';
/** Style */
import styles from "@/components/common/header/Header.module.css"
import { Box, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
/** Icon */
import { IconButton, Tooltip } from '@mui/material';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogOutOutline } from 'react-icons/io5';

const drawerWidth = 230;

const Header: React.FC = () => {
	const { handleOpenSidebar } = useSidebar();
	const { push } = useRouter();

	const handleClickMyPage = () => push("/home/mypage");

	const handleClickLogout = () => {

	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar className={styles.nav_bar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleOpenSidebar}
						sx={{ mr: 2, display: { md: 'none' } }}
					>
						<GiHamburgerMenu style={{ color:"#fff" }} />
					</IconButton>

					<Typography variant="h6" noWrap component="div" fontWeight={900}>
						주은혜 교회
					</Typography>

					<div>
							<Tooltip title="마이 페이지">
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="start"
									onClick={handleClickMyPage}
								>
									<BsFillPersonFill/>
								</IconButton>
							</Tooltip>

							<Tooltip title="로그아웃">
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="end"
									// onClick={handleLogout}
								>
									<IoLogOutOutline/>
								</IconButton>
							</Tooltip>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;