/** React */
import React from 'react';
import { useNavigate } from 'react-router'
/** Zustand */
import { useSideBar } from '@/store/store.ts'
/** Style */
import styled from 'styled-components'
import { Tooltip, Toolbar, AppBar, IconButton, Typography } from '@mui/material'
/** Icon */
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import { BsFillPersonFill } from 'react-icons/bs'

const LoginBox = styled.div`
	display: flex;
	width: 60px;
	justify-content: space-between;
`

const Header: React.FC = () => {
	const { handleOpenSideBar } = useSideBar();
	const navigator = useNavigate();

	const handleLogout = () => {
		if(window.confirm("로그아웃 하시겠습니까?")){
			sessionStorage.removeItem("userId");
			sessionStorage.removeItem("userName");
			sessionStorage.removeItem("userAuth");

			navigator("/")
		}
	}

	const handleMyPage = () => {
		navigator("/mypage")
	}

	return (
		<AppBar
			position="relative"
			sx={{
				backgroundColor: "#000",
				width: { md: `calc(100% - ${200}px)` },
				ml: { md: `${200}px` },
			}}
		>
			<Toolbar sx={{
				height: "64px",
				display:"flex",
				justifyContent:"space-between",

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
					주은혜 교회
				</Typography>

				<div>
					<LoginBox>
						<Tooltip title="마이 페이지">
							<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleMyPage}
							>
								<BsFillPersonFill/>
							</IconButton>
						</Tooltip>

						<Tooltip title="로그아웃">
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="end"
								onClick={handleLogout}
							>
								<IoLogOutOutline/>
							</IconButton>
						</Tooltip>
					</LoginBox>
				</div>

			</Toolbar>
		</AppBar>
	);
};

export default Header;