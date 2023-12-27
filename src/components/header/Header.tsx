import React from 'react';
import { useNavigate } from 'react-router';
/** Atom */
import { useSetRecoilState } from 'recoil';
import { SidebarAtom } from '@/atom/SidebarAtom.ts';
/** Libs */
import pagePath from '@/libs/pagePath';
/** Style */
import { CssBaseline, AppBar, Typography, IconButton, Tooltip } from '@mui/material';
import { HeaderBar, HeaderBible, HeaderBibleLink, HeaderContainer, HeaderIcon, HeaderIconBox, HeaderLink, HeaderTitle, HeaderToolbar } from '@components/header/Header.styled.ts';
/** Icon */
import { BiLogIn } from "react-icons/bi";
import { LuAlignJustify } from "react-icons/lu";
import { BsPersonLinesFill } from "react-icons/bs";

const Header: React.FC = () =>  {
	const setSidebar = useSetRecoilState(SidebarAtom);
	const navigate = useNavigate();

	const handleOpenSidebar = () => {
		setSidebar(true);
	}

	const handleLogout = () => {
		sessionStorage.removeItem("uuid");
		sessionStorage.removeItem("auth");
		sessionStorage.removeItem("userName");
		navigate("/");
	}

	return (
		<>
			<CssBaseline />
			<AppBar position="sticky" sx={{ backgroundColor: "#03c75a"}}>
				<HeaderToolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						sx={{ display: { xs: "flex", md: "none" }, paddingLeft: "20px"}}
						onClick={handleOpenSidebar}
						>
						<LuAlignJustify/>
					</IconButton>

					<HeaderContainer>
						<HeaderTitle to={"/home"}>
							<Typography variant="h6" fontWeight={"900"} component="div">
								주은혜 교회
							</Typography>
						</HeaderTitle>

						<HeaderBar>
							<HeaderLink to="/home" $path={pagePath("home")}>HOME</HeaderLink>
							
							<HeaderBible $path={pagePath("Testament")}>
								<span>성경</span>

								<div className='bible'>
									<HeaderBibleLink to="/home/oldTestament" $path={pagePath("oldTestament")}>구약</HeaderBibleLink>
									<HeaderBibleLink to="/home/newTestament" $path={pagePath("newTestament")}>신약</HeaderBibleLink>
								</div>
							</HeaderBible>

							<HeaderLink to="/home/pbs?page=1&book=" $path={pagePath("pbs")}>PBS</HeaderLink>
							
							<HeaderLink to="/home/qt?page=1&book=" $path={pagePath("qt")}>QT</HeaderLink>

							{sessionStorage.getItem("auth") === "ADMIN" && <HeaderLink to="/home/admin" $path={pagePath("admin")}>관리자 권한</HeaderLink>}
						</HeaderBar>
					</HeaderContainer>

					<HeaderIconBox>
						<Tooltip title={"마이페이지"}>
							<HeaderIcon to={"/home/myPage?page=1&book="}>
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
								onClick={handleLogout}
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