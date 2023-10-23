/** React */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router'
/** Hook */
import { useForm } from 'react-hook-form'
import useSnack from '@/hook/useSnack.ts'
/** Recoil */
import { PBSNoticeAtom } from '@/store/NoticeAtom.ts'
import { CreateSnackAtom } from '@/store/SnackAtom.ts'
import { useRecoilState, useResetRecoilState } from 'recoil'
/** Api */
import { useCreatePBSQuery } from '@/api/BibleQuery.ts'
import { useCreatePBSMutation } from '@/api/PBSQuery.ts'
/** Component */
import TextSelect from '@components/create/TextSelect.tsx'
import TextNumber from '@components/create/TextNumber.tsx'
import TextSwitch from '@components/create/TextSwitch.tsx'
import TextChapter from '@components/create/TextChapter.tsx'
import TextMultiField from '@components/create/TextMultiField.tsx'
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

	const { handleSnackClick } = useSnack(CreateSnackAtom);

	const navigate = useNavigate();

	const { register, handleSubmit, watch, setValue, formState: { errors }, getValues } = useForm({
		mode: "onChange",
		defaultValues: {
			...notice,
			userId: sessionStorage.getItem("userId"),
			userName: sessionStorage.getItem("userName")},
	});

	const { isLoading, data, refetch } = useCreatePBSQuery(getValues("book"), watch("chapter"));
	const { mutate } = useCreatePBSMutation();

	console.log( !isLoading && data );

	useEffect(() => {
		refetch()
	}, [watch("book"), watch("chapter")])

	/** Post */
	const createPBS = (data: Bible.Create): void => {
		const createSnack = handleSnackClick({ vertical: "bottom", horizontal: "right" });
		if(window.confirm("PBS 작성하시겠습니까?")){
			mutate(data,
				{ onSuccess: () => {
						navigate( "/pbs" );
						createSnack();
					} }
			);
			resetNotice();
		}
	}

	/** 암시 저장 */
	const tmpSave = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		if(window.confirm("임시 저장 하시겠습니까?")){
			alert("임시저장 되었습니다.");
			setNotice({
				book:       watch("book"),
				chapter:    watch("chapter"),
				startVerse: watch("startVerse"),
				endVerse:   watch("endVerse"),
				content:    watch("content"),
				showData:   watch("showData")
			});
		}
	};

	/** 뒤로가기 */
	const handleBackPage = (): void => {
		navigate("/pbs")
	};

	return (
		<PageContainer>
			{
				!isLoading ?<NoticeForm onSubmit={handleSubmit( createPBS )}>
				<TextSwitch setValue={setValue} watch={watch}/>

				<TextSelect register={register} name={"book"} watch={watch}/>

				<TextChapter register={register} name={"chapter"} verse={"장"} max={data.chapter}/>

				<div>
					<TextNumber register={register} name={"startVerse"} verse={"절"}/>
					<TextNumber register={register} name={"endVerse"} verse={"절"}/>
				</div>

				<hr/>

				<TextMultiField register={register} name={"content"}/>
			</NoticeForm> : null}

			<FooterContainer content={"space-between"}>
				<div>
					<Button variant="outlined" onClick={handleBackPage}>나가기</Button>

					<span>
						<Button variant="contained" onClick={handleSubmit(createPBS)} sx={{ margin: "0 20px"}}>
							생성
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