/** React */
import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
/** Cookie */
import { getCookie } from '@/libs/cookie.ts';

const AuthRoutes: React.FC = () => {
	return (
		getCookie("userId") ?
			<>
				<Outlet/>
			</>
			:
			// @ts-ignore
			<Navigate to={"/"} {...alert("로그인이 필요합니다.")}/>
	)
}

export default AuthRoutes;