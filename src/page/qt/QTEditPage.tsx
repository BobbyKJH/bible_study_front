/** React */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
/** Hook */
import { useForm } from 'react-hook-form';
/** Api */
import { useEditQTMutation, useQTDetailQuery } from '@/api/QTQuery.ts';
/** Utils */
import { bible, newTestament, oldTestament } from '@utils/arr/BibleBooks.ts';
/** Component */
import TextSelect from '@components/create/TextSelect.tsx';
import TextNumber from '@components/create/TextNumber.tsx';
import TextMultiField from '@components/create/TextMultiField.tsx';
/** Type */
import Bible from '@type/Bible';
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts';
import { MenuItem, Paper, Select } from '@mui/material';

const QtEditPage: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data, isLoading } = useQTDetailQuery(id as string);
	const { mutate } = useEditQTMutation();

	const {
		register,
		watch,
		handleSubmit,
		reset} = useForm();

	useEffect(() => {
		reset( {...data})
		watch()
	}, [isLoading]);

	const editQT = (data: Bible.Create) => {
		if(window.confirm("수정 하시겠습니까?")){
			mutate(data, {
				onSuccess: () => {
					navigate(`/qt/read/${id}`);
				}
			});
		};
	};

	return (
		<PageContainer>

			{!isLoading ?
				<Paper>
					<form onSubmit={handleSubmit(editQT)}>
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

export default QtEditPage;