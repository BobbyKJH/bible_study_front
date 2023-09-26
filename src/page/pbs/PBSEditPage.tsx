import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router'
import { useDetailQuery, useEditPBSMutation } from '@/api/PBSQuery.ts'
import { useForm } from 'react-hook-form'
import { PageContainer } from '@style/common/PageStyle.ts'
import TextNumber from '@components/create/TextNumber.tsx'
import Bible from '@type/Bible'
import TextSelect from '@components/create/TextSelect.tsx'
import { bible, newTestament, oldTestament } from '@utils/arr/BibleBooks.ts'
import TextMultiField from '@components/create/TextMultiField.tsx'
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material'

const PbsEditPage: React.FC = () => {
	const { id } = useParams();

	const { data, isLoading } = useDetailQuery(id as string);

	const naviagtor = useNavigate();

	const { mutate } = useEditPBSMutation();

	const {
		register,
		watch,
		handleSubmit,
		reset} = useForm();

	useEffect(() => {
		reset( {...data})
		watch()
	}, [isLoading])

	const editPBS = (data: Bible.Create) => {
		if(window.confirm("수정 하시겠습니까?")){
			mutate(data, {
				onSuccess: () => {
					naviagtor(`/pbs/read/${id}`);
				}
			});
		};
	}

	return (
	<PageContainer>

		{!isLoading ?
			<Paper>
				<form onSubmit={handleSubmit(editPBS)}>
					<TextSelect register={register} name={"book"} oldTestament={oldTestament} newTestament={newTestament} watch={watch}/>

						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							{...register("book",{ required: true })}
							autoWidth
							label="Age"
						>
							{bible.map((bible) => <MenuItem key={bible.book} value={bible.book}>{bible.book}</MenuItem>)}
						</Select>



					<TextNumber register={register} name={"chapter"} verse={"장"}/>

					<div>
						<TextNumber register={register} name={"startVerse"} verse={"절"}/>
						<TextNumber register={register} name={"endVerse"} verse={"절"}/>
					</div>

					<TextMultiField register={register} name={"content"} />

					<button type={"submit"}>수정</button>
				</form>
			</Paper>
			:
			null
		}
	</PageContainer>
	);
};

export default PbsEditPage;