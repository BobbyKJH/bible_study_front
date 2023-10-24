/** React */
import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
/** Cookie */
import { removeCookie } from '@utils/cookie.ts'
/** Recoil */
import { sideBarAtom } from '@/store/SideBarAtom.ts'
import { MyPagePBSAtom, MyPagePBSSearchAtom, MyPageQTAtom, MyPageQTSearchAtom } from '@/store/MyPageAtom.ts'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
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
	const navigator = useNavigate();

	const setSideBar = useSetRecoilState(sideBarAtom);

	const resetMyPagePBSPage = useResetRecoilState(MyPagePBSAtom);
	const resetMyPagePBSSearch = useResetRecoilState(MyPagePBSSearchAtom);
	const resetMyPageQTPage = useResetRecoilState(MyPageQTAtom);
	const resetMyPageQtSearch = useResetRecoilState(MyPageQTSearchAtom);

	const handleOpenSideBar = () => {
		setSideBar(true);
	};

	const handleMyPage = (): void => {
		resetMyPagePBSPage();
		resetMyPageQTPage();

		resetMyPagePBSSearch();
		resetMyPageQtSearch();

		navigator("/mypage")
	}

	const handleLogout = () => {
		if(window.confirm("로그아웃 하시겠습니까?")){
			sessionStorage.removeItem("userName");
			sessionStorage.removeItem("userAuth");

			removeCookie("userId");
			removeCookie("userName");

			navigator("/")
		}
	};

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
					<GiHamburgerMenu style={{ color:"#fff" }} />
				</IconButton>

				<Link to={"/home"} style={{ color:"#fff" }}>
					<Typography variant="h6" noWrap component="div">
						주은혜 교회
					</Typography>
				</Link>

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