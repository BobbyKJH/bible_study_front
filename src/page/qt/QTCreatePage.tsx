/** React */
import React from 'react';
import { useNavigate } from 'react-router'
/** Hook */
import { useForm } from 'react-hook-form'
/** Api */
import { useCreateQTMutation } from '@/api/QTQuery.ts'
/** Atom */
import { QTNoticeAtom } from '@/store/NoticeAtom.ts'
import { useRecoilState, useResetRecoilState } from 'recoil'
/** Component */
import TextSelect from '@components/create/TextSelect.tsx'
import TextNumber from '@components/create/TextNumber.tsx'
import TextSwitch from '@components/create/TextSwitch.tsx'
import TextMultiField from '@components/create/TextMultiField.tsx'
/** Type */
import Bible from '@type/Bible'
/** Style */
import { Button } from '@mui/material'
import { NoticeForm } from '@style/notice/NoticeStyle.ts'
import { PageContainer } from '@style/common/PageStyle.ts'
import { FooterContainer } from '@style/common/FooterStyle.ts'

const QTCreatePage: React.FC = () => {
	const [notice, setNotice] = useRecoilState<Bible.Create>(QTNoticeAtom);
	const resetNotice = useResetRecoilState(QTNoticeAtom);


	const navigate = useNavigate()

	const { mutate } = useCreateQTMutation();

	const { register, handleSubmit, watch, setValue } = useForm({
		mode: "onChange",
		defaultValues: {
			...notice,
			userId: sessionStorage.getItem("userId"),
			userName: sessionStorage.getItem("userName")},
	});

	/** Post */
	const createQT = (data: Bible.Create): void => {
		if(window.confirm("QT 작성하시겠습니까?")){
			mutate(data,
				{ onSuccess: () => navigate("/qt") }
			);
			resetNotice();
		}
	}

	const tmpSave = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		if(window.confirm("임시 저장 하시겠습니까?")){
			alert("임시저장 되었습니다.");
			setNotice( {
				book:       watch("book"),
				chapter:    watch("chapter"),
				startVerse: watch("startVerse"),
				endVerse:   watch("endVerse"),
				content:    watch("content"),
				showData:   watch("showData")
			});
		}
	};

	const handleBackPage = (): void => {
		navigate("/qt");
	};

	return (
		<PageContainer>
				<NoticeForm onSubmit={handleSubmit(createQT)}>
					<div style={{ display: "flex" }}>
						<TextSwitch setValue={setValue} watch={watch}/>

						<TextSelect register={register} name={"book"} watch={watch}/>

						<TextNumber register={register} name={"chapter"} verse={"장"}/>

						<div>
							<TextNumber register={register} name={"startVerse"} verse={"절"}/>
							<TextNumber register={register} name={"endVerse"} verse={"절"}/>
						</div>
					</div>

					<hr/>

					<TextMultiField register={register} name={"content"} />

				</NoticeForm>

			<FooterContainer content={"space-between"}>
				<div>
					<Button variant="outlined" onClick={handleBackPage}>나가기</Button>

					<span>
						<Button
							variant="contained"
							onClick={handleSubmit(createQT)}
							sx={{ margin: "0 20px" }}
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

export default QTCreatePage;222
