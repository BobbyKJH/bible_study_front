/** React */
import React from 'react';
/** Zustand */
import { useSideBar } from '@/store/store.ts'
/** Style */
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
/** Icon */
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";

const Header: React.FC = () => {
	const { handleOpenSideBar } = useSideBar();

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: "#000",
				width: { md: `calc(100% - ${200}px)` },
				ml: { md: `${200}px` },
			}}
		>
			<Toolbar sx={{
				height: "64px",
				display:"flex",
				justifyContent:"space-between"

			}}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleOpenSideBar}
					sx={{ mr: 2, display: { md: 'none' } }}
				>
					<GiHamburgerMenu style={{color:"#fff"}} />
				</IconButton>

				<Typography variant="h6" noWrap component="div">
					Responsive drawer
				</Typography>

				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleOpenSideBar}
				>
					<IoLogOutOutline />
				</IconButton>

			</Toolbar>
		</AppBar>
	);
};

export default Header;