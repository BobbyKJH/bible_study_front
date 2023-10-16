/** React */
import React from 'react';
import { useNavigate } from 'react-router';
/** Hook */
import { useForm } from 'react-hook-form';
/** Component */
import TextInput from '@components/create/TextInput.tsx';
/** Query */
import { useCreateUserMutation } from '@/api/UserQuery.ts';
/** Type */
import Bible from '@type/Bible';
/** Styles */
import { LoginAlert, LoginBtn, LoginContainer, LoginDate, LoginPaper, LoginTitle } from '@style/login/LoginStyle.ts';

const LoginCreatePage: React.FC = () => {
	const {
		register,
		handleSubmit,
		setFocus,
		resetField,
		formState: { errors }} =
		useForm<Bible.User>({
		defaultValues: { userName: "", userId: "", userBirth: "" }
	});
	const { mutate } = useCreateUserMutation();
	const navigate = useNavigate();

	const createUser = (data: Bible.User): void => {
		mutate(data, {
			onSuccess: () => {
				alert("회원 가입 완료 하였습니다")
				navigate("/")
			},
			onError: () => {
				alert("중복된 아이디가 있습니다.");
				setFocus("userId");
				resetField("userId");
			}
		})
	}

	return (
	<LoginContainer maxWidth="sm" >
		<LoginPaper elevation={3}>
			<LoginTitle>회원가입</LoginTitle>

			<form style={{ width: "80%" }} onSubmit={handleSubmit(createUser)}>
				<TextInput register={register} name={"userName"} label={"이름"}/>
				{errors.userName && <LoginAlert>이름을 입력해주세요.</LoginAlert>}

				<div style={{ height: "40px" }}/>

				<TextInput register={register} name={"userId"} label={"ID"}/>
				{errors.userId && <LoginAlert>ID를 입력해주세요.</LoginAlert>}

				<div style={{ height: "40px" }}/>

				<LoginDate
					type={"date"}
					label={"생년 월 일"}
					{...register("userBirth", { required: "생년월일을 입력해주세요.", maxLength: { value: 10, message: "생년 월 일을 확인해보세요." } })}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<LoginAlert>{errors?.userBirth?.message}</LoginAlert>

				<LoginBtn type={"submit"}>회원가입</LoginBtn>
			</form>

		</LoginPaper>
	</LoginContainer>
	);
};

export default LoginCreatePage;