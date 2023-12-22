import React from 'react';
import { useNavigate } from 'react-router';
/** Recoil */
import { useRecoilState } from 'recoil';
import { SnackAtom } from '@/atom/SnackAtom';
/** Hook */
import { useForm } from 'react-hook-form';
/** Api */
import { useUserMutation } from '@/api/UserQuery.ts';
/** Type */
import Bible from '@type/Bible';

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const [snack, setSnack] = useRecoilState(SnackAtom);

	const { mutate } = useUserMutation();

	const { register, handleSubmit, resetField } = useForm({
		defaultValues: {
			userId: "",
		}
	})

	const handleLogin = (data: { userId: string }) => {
		mutate(data, {
			onSuccess: (data: Bible.User) => {
				sessionStorage.setItem("userName", data.userName);
				sessionStorage.setItem("uuid", data.id);
				sessionStorage.setItem("auth", data.auth);
				navigate("/home")
			},
			onError: () => {
				setSnack({
					...snack,
					open: true,
					message: "아이디",
					severity: "error"
				});
				resetField("userId");
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