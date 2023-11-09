/** React */
import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
/** Cookie */

const AuthRoutes: React.FC = () => {
	return (
		sessionStorage.getItem("userName") ?
			<>
				<Outlet/>
			</>
			:
			// @ts-ignore
			<Navigate to={"/"} {...alert("로그인이 필요합니다.")}/>
	)
}

export default AuthRoutes;