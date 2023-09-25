/** React */
import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
/** Component */
import SideBar from '@components/common/sideBar/SideBar.tsx'
import Header from '@components/common/Header.tsx'

const AuthRouter: React.FC = () => {
	return (
		sessionStorage.getItem("userId") && sessionStorage.getItem("userName") ?
			<>
				<SideBar/>

				<Header/>

				<Outlet/>
			</>
			:
			// @ts-ignore
			<Navigate to={"/"} {...alert("로그인이 필요합니다.")}/>
	)
}

export default AuthRouter;