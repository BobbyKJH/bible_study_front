import React from 'react';
import { useNavigate } from 'react-router';
/** Api */
import { useCreateQTMutation } from '@/api/QTQuery.ts';
/** Atom */
import { QtAtom } from '@/atom/CreateAtom.ts';
import { useRecoilState, useResetRecoilState } from 'recoil';
/** Cookie */
import { getCookie } from '@/libs/cookie.ts';
/** Hook */
import { useForm } from 'react-hook-form';
import useSnack from '@/hook/useSnack.ts';
/** Component */
import CreateBook from '@components/create/CreateBook.tsx';
import CreateVerse from '@components/create/CreateVerse.tsx';
import CreateContent from '@components/create/CreateContent.tsx';
import CreateShowData from '@components/create/CreateShowData.tsx';
import CreateButtonGroup from '@components/create/CreateButtonGroup.tsx';
/** Type */
import Bible from '@type/Bible';
/** Style */
import { Button, Container } from '@mui/material';

const QtCreatePage: React.FC = () => {
	const navigate = useNavigate()
	/** Api */
	const { mutate } = useCreateQTMutation();
	/** Atom */
	const [storage, setStorage] = useRecoilState(QtAtom);
	const resetStorage = useResetRecoilState(QtAtom);
	/** Hook */
	const { handleOpenSnack } = useSnack();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch
	} = useForm<Bible.Create>({
		defaultValues: {
			...storage,
			userId: getCookie("userId"),
			userName: sessionStorage.getItem("userName"),
		},
		mode: "onChange"
	});
	/** Post */
	const handleCreateButton = (data: Bible.Create) => {
		mutate(data, {
			onSuccess: () => {
				navigate("/home/qt?page=1&book=");
				handleOpenSnack( { message: "등록 완료", severity: "success" });
				resetStorage();
			},
			onError: () => {
				handleOpenSnack( { message: "등록 실패", severity: "error" });
			}
		})
	}

	/** 임시 저장 버튼 */
	const handleTempStorage = (event: React.MouseEvent) => {
		event.preventDefault();
		setStorage({
			book: watch("book"),
			chapter: watch("chapter"),
			startVerse: watch("startVerse"),
			endVerse: watch("endVerse"),
			content: watch("content"),
			showData: watch("showData")
		})
		handleOpenSnack( { message: "저장 완료", severity: "info" });
	}

	return (
		<Container sx={{ m :"80px auto",padding:0, boxSizing: "border-box" }}>
			<form onSubmit={handleSubmit(handleCreateButton)}>
				<div style={{ display:"flex", justifyContent: "space-between", alignItems: "center"}}>
					<CreateBook setValue={setValue} storage={storage.book}/>
				</div>

				<div style={{ display:"flex", justifyContent: "space-between", alignItems: "center"}}>
					<CreateShowData setValue={setValue} watch={watch}/>

					<div>
						<CreateVerse
							register={register}
							name={"chapter"}
							content={"장"}
							errors={errors?.chapter?.message}
						/>

						<CreateVerse
							register={register}
							name={"startVerse"}
							content={"절"}
							errors={errors?.startVerse?.message}
						/>

						<CreateVerse
							register={register}
							name={"endVerse"}
							content={"절"}
							errors={errors?.endVerse?.message}
						/>
					</div>
				</div>

				<hr style={{marginTop: "10px", border: "1px solid black"}}/>

				<CreateContent register={register}/>

				<CreateButtonGroup>
					<Button type={"submit"}>등록</Button>

					<Button onClick={handleTempStorage}>임시저장</Button>
				</CreateButtonGroup>
			</form>
		</Container>
	);
};

export default QtCreatePage;