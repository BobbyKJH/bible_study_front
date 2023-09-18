import React from 'react';
import { useUserMutation } from '@/api/UserQuery.ts'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const LoginPage: React.FC = () => {
	const navigate = useNavigate();

	const { mutate } = useUserMutation();
	const { register, handleSubmit } = useForm({
		defaultValues: { userId : "" }
	});

	/** 로그인 FC */
	const loginBtn = (data: { userId: string }): void => {
		mutate(data, {
			onSuccess: () => {
				navigate("/home")
			},
			onError: () => alert("일치하는 ID가 없습니다.")
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit(loginBtn)}>
				<input {...register("userId", { required: "아이디를 입력해주세요." })}/>
				<button type={"submit"}>로그인</button>
			</form>
		</div>
	);
};

export default LoginPage;