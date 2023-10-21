/** React */
import React from 'react';
import { useNavigate } from 'react-router'
/** Hook */
import { useForm } from 'react-hook-form'
/** Query */
import { useUserMutation } from '@/api/UserQuery.ts'
/** Component */
import TextInput from '@components/create/TextInput.tsx'
/** Style */
import {
	LoginAlert,
	LoginBtn,
	LoginContainer,
	LoginCreateBtn,
	LoginPaper,
	LoginTitle
} from '@style/login/LoginStyle.ts'



const LoginPage: React.FC = () => {
	const navigate = useNavigate();

	const { mutate } = useUserMutation();
	const {
		register,
		handleSubmit,
		reset,
		setFocus,
		formState: { errors } } =
		useForm<{ userId: string }>({
		defaultValues: { userId : "" },
	});

	/** 로그인 FC */
	const loginBtn = (data: { userId: string }): void => {
		mutate(data, {
			onSuccess: () => {
				navigate("/home", { replace: true })
			},
			onError: () => {
				alert( "일치하는 ID가 없습니다." )
				setFocus("userId")
				reset();
			}
		})
	}

	return (
		<LoginContainer maxWidth="sm" >
			<h1>BIBLE</h1>
			<LoginPaper elevation={3}>
				<LoginTitle>교회</LoginTitle>

				<form style={{ width: "80%" }} onSubmit={handleSubmit(loginBtn)}>
					<TextInput register={register} name={"userId"} label={"ID"}/>

					{errors.userId && <LoginAlert>ID를 입력해주세요.</LoginAlert>}

					<LoginBtn type={"submit"}>로그인</LoginBtn>
				</form>

				<LoginCreateBtn to={"/create/user"}>회원 가입</LoginCreateBtn>
			</LoginPaper>
		</LoginContainer>
	);
};

export default LoginPage;