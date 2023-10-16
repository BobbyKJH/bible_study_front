/** React */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
/** Hook */
import { useForm } from 'react-hook-form';
/** Api */
import { usePBSDetailQuery, useEditPBSMutation } from '@/api/PBSQuery.ts';
/** Component */
import TextNumber from '@components/create/TextNumber.tsx';
import TextSelect from '@components/create/TextSelect.tsx';
import TextMultiField from '@components/create/TextMultiField.tsx';
/** Utils */
import { newTestament, oldTestament } from '@utils/arr/BibleBooks.ts';
/** Style */
import { Paper } from '@mui/material';
import { PageContainer } from '@style/common/PageStyle.ts';
import { FooterContainer } from '@style/common/FooterStyle.ts';

const PbsEditPage: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data, isLoading } = usePBSDetailQuery(id as string);
	const { mutate } = useEditPBSMutation();

	const {
		register,
		watch,
		handleSubmit,
		reset} = useForm();

	useEffect(() => {
		reset( {...data});
		watch();
	}, [isLoading])

	const editPBS = (data: any) => {
		if(window.confirm("수정 하시겠습니까?")){
			mutate(data, {
				onSuccess: () => {
					navigate(`/pbs/read/${id}`);
				}
			});
		}
	}
	console.log(watch())

	return (
	<PageContainer>

		{!isLoading ?
			<Paper>
				<form onSubmit={handleSubmit(editPBS)}>
					<div>
					<TextSelect register={register} name={"book"} oldTestament={oldTestament} newTestament={newTestament} watch={watch}/>

					<TextNumber register={register} name={"chapter"} verse={"장"}/>

					<div>
						<TextNumber register={register} name={"startVerse"} verse={"절"}/>
						<TextNumber register={register} name={"endVerse"} verse={"절"}/>
					</div>

					<TextMultiField register={register} name={"content"} />
					</div>

					<FooterContainer content={"right"}>
						<div>
							<button type={"submit"}>수정</button>
						</div>
					</FooterContainer>
				</form>

			</Paper>
			:
			null
		}
	</PageContainer>
	);
};

export default PbsEditPage;