/** React */
import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
/** Cookie */
import { getCookie } from '@utils/cookie.ts';
/** Component */
import Header from '@components/common/Header.tsx';
import SideBar from '@components/common/sideBar/SideBar.tsx';

const AuthRouter: React.FC = () => {
	return (
		getCookie("userId") ?
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