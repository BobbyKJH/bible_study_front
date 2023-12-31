import React from 'react';
import { useNavigate } from 'react-router';
/** Atom */
import { useCreatePBSMutation } from '@/api/PBSQuery.ts';
/** Atom */
import { PbsAtom } from '@/atom/CreateAtom.ts';
import { useRecoilState, useResetRecoilState } from 'recoil';
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
import { Container } from '@mui/material';

const PbsCreatePage: React.FC = () => {
	const navigate = useNavigate()
	/** Api */
	const { mutate } = useCreatePBSMutation();
	/** Atom */
	const [storage, setStorage] = useRecoilState(PbsAtom);
	const resetStorage = useResetRecoilState(PbsAtom);
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
			uuid: sessionStorage.getItem("uuid"),
			userName: sessionStorage.getItem("userName"),
		},
		mode: "onChange"
	});
	/** Post */
	const handleCreateButton = (data: Bible.Create) => {
		mutate(data, {
			onSuccess: () => {
				navigate("/home/pbs?page=1&book=");
				handleOpenSnack({ message: "등록 완료", severity: "success" });
				resetStorage();
			},
			onError: () => {
				handleOpenSnack({ message: "등록 실패", severity: "error" });
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
		handleOpenSnack({ message: "저장 완료", severity: "info" });
	}

	return (
		<Container sx={{ padding:0, boxSizing: "border-box" }}>
			<form onSubmit={handleSubmit(handleCreateButton)}>
				<div style={{ display:"flex", justifyContent: "space-between", alignItems: "center"}}>
				</div>

				<div style={{ display:"flex", justifyContent: "space-between", alignItems: "center"}}>
					<CreateBook setValue={setValue} storage={storage.book}/>

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

				<CreateShowData setValue={setValue} watch={watch}/>


				<hr style={{marginTop: "10px", border: "1px solid black"}}/>

				<CreateContent register={register}/>

				<CreateButtonGroup handleTempStorage={handleTempStorage}/>
			</form>
		</Container>
	);
};

export default PbsCreatePage;