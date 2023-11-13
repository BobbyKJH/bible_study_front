import React from 'react';
import { useNavigate } from 'react-router';
/** Hook */
import { useForm } from 'react-hook-form';
/** Api */
import { useUserMutation } from '@/api/UserQuery.ts';
/** Cookie */
import { setCookie } from '@/libs/cookie.ts';
/** Sha256 */
import { sha256 } from 'js-sha256';
/** Type */
import Bible from '@type/Bible';

const LoginPage: React.FC = () => {
	const navigate = useNavigate();

	const { mutate } = useUserMutation();

	const { register, handleSubmit} = useForm({
		defaultValues: {
			"userId": ""
		}
	})

	const handleLogin = (data: { userId: string }) => {
		mutate(data, {
			onSuccess: (data: Bible.User) => {
				setCookie("userId", sha256(data.userId));
				setCookie("userAuth", data.userAuth);
				sessionStorage.setItem("userName", data.userName);
				navigate("/home")
			}
		});
	}

	return (
		<form onSubmit={handleSubmit(handleLogin)}>
			<input {...register("userId")}/>
			<button type={"submit"}>로그인</button>
		</form>
	);
};

export default LoginPage;