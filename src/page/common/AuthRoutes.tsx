/** React */
import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
/** Components */
import Header from '@components/header/Header.tsx';
import Sidebar from '@components/sidebar/Sidebar.tsx';
/** Style */
import { AuthRoutesContainer } from '@page/common/AuthRoutes.styled.ts';

const AuthRoutes: React.FC = () => {
	return (
		sessionStorage.getItem("uuid") ?
			<AuthRoutesContainer>
				<Header/>

				<Sidebar/>

				<Outlet/>
			</AuthRoutesContainer>
			:
			// @ts-ignore
			<Navigate to={"/"} {...alert("로그인이 필요합니다.")}/>
	)
}

export default AuthRoutes;