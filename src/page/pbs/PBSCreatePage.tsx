/** React */
import React from 'react';
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
/** Api */
import { useCreatePBSMutation } from '@/api/PBSQuery.ts'
/** Zustand */
import { usePBSCreate } from '@/store/store.ts'
/** Component */
import TextSelect from '@components/create/TextSelect.tsx'
import TextNumber from '@components/create/TextNumber.tsx'
import TextMultiField from '@components/create/TextMultiField.tsx'
/** Utils */
import { newTestament, oldTestament } from '@utils/arr/BibleBooks.ts'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'
import { Paper } from '@mui/material'
/** Type */
import Bible from '@type/Bible'


const PBSCreatePage: React.FC = () => {
	const navigate = useNavigate()

	const { pbs, savePBS, clearPBS } = usePBSCreate();

	const { mutate } = useCreatePBSMutation();

	const { register, handleSubmit, watch } = useForm({
		mode: "onChange",
		defaultValues: {
			...pbs,
			userId: sessionStorage.getItem("userId"),
			userName: sessionStorage.getItem("userName")}
	});


	/** Post */
	const createPBS = (data: Bible.Create): void => {
		if(window.confirm("PBS 작성하시겠습니까?")){
			mutate(data,
				{ onSuccess: () => navigate("/pbs") }
			);
			clearPBS();
		}
	}

	const tmpSave = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()
		if(window.confirm("임시 저장 하시겠습니까?")){
			savePBS(watch())
		}
	}

	return (
		<PageContainer>
			<Paper>
				<form onSubmit={handleSubmit(createPBS)}>
					<TextSelect register={register} name={"book"} oldTestament={oldTestament} newTestament={newTestament} watch={watch}/>

					<TextNumber register={register} name={"chapter"} verse={"장"}/>
					<div>
						<TextNumber register={register} name={"startVerse"} verse={"절"}/>
						<TextNumber register={register} name={"endVerse"} verse={"절"}/>
					</div>
					<input type={"date"} {...register("date")}/>

					<TextMultiField register={register} name={"content"} />

					<button type={"submit"}>생성</button>
					<button onClick={tmpSave}>임시저장</button>
				</form>
			</Paper>
		</PageContainer>
	);
};

export default PBSCreatePage;