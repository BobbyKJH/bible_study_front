/** React */
import React from 'react';
import { useNavigate } from 'react-router'
/** Hook */
import { useForm } from 'react-hook-form'
/** Recoil */
import { PBSNoticeAtom } from '@/store/NoticeAtom.ts'
import { useRecoilState, useResetRecoilState } from 'recoil'
/** Api */
import { useCreatePBSMutation } from '@/api/PBSQuery.ts'
/** Component */
import TextSelect from '@components/create/TextSelect.tsx'
import TextNumber from '@components/create/TextNumber.tsx'
import TextMultiField from '@components/create/TextMultiField.tsx'
/** Utils */
import { newTestament, oldTestament } from '@utils/arr/BibleBooks.ts'
/** Type */
import Bible from '@type/Bible'
/** Style */
import { Button } from '@mui/material'
import { NoticeForm } from '@style/notice/NoticeStyle.ts'
import { PageContainer } from '@style/common/PageStyle.ts'
import { FooterContainer } from '@style/common/FooterStyle.ts'


const PBSCreatePage: React.FC = () => {
	const [notice, setNotice] = useRecoilState<Bible.Create>(PBSNoticeAtom);
	const resetNotice = useResetRecoilState(PBSNoticeAtom);

	const { register, handleSubmit, watch } = useForm({
		mode: "onChange",
		defaultValues: {
			...notice,
			userId: sessionStorage.getItem("userId"),
			userName: sessionStorage.getItem("userName")},
	});
	const { mutate } = useCreatePBSMutation();

	const navigate = useNavigate();

	/** Post */
	const createPBS = (data: Bible.Create): void => {
		if(window.confirm("PBS 작성하시겠습니까?")){
			mutate(data,
				{ onSuccess: () => navigate("/pbs") }
			);
			resetNotice();
		}
	}

	/** 암시 저장 */
	const tmpSave = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		if(window.confirm("임시 저장 하시겠습니까?")){
			alert("임시저장 되었습니다.");
			setNotice(watch());
		}
	};

	/** 뒤로가기 */
	const handleBackPage = (): void => {
		navigate("/pbs")
	};

	return (
		<PageContainer>
			<NoticeForm onSubmit={handleSubmit(createPBS)}>
					<TextSelect register={register} name={"book"} oldTestament={oldTestament} newTestament={newTestament} watch={watch}/>

					<TextNumber register={register} name={"chapter"} verse={"장"}/>

					<div>
						<TextNumber register={register} name={"startVerse"} verse={"절"}/>
						<TextNumber register={register} name={"endVerse"} verse={"절"}/>
					</div>

				<input type={"date"} {...register("date")}/>

				<hr/>

				<TextMultiField register={register} name={"content"} />
			</NoticeForm>

			<FooterContainer content={"space-between"}>
				<div>
					<Button variant="outlined" onClick={handleBackPage}>나가기</Button>

					<span>
						<Button
							variant="contained"
							onClick={handleSubmit(createPBS)}
							sx={{ margin: "0 20px"}}
						>생성
						</Button>

						<Button variant="outlined" onClick={tmpSave}>
							임시 저장
						</Button>
					</span>
				</div>
			</FooterContainer>
		</PageContainer>


	);
};

export default PBSCreatePage;