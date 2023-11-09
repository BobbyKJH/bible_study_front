import { useUserMutation } from '@/api/UserQuery.ts';
import { setCookie } from '@/libs/cookie.ts';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

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
			onSuccess: (data) => {
				setCookie("userId", data.userId);
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