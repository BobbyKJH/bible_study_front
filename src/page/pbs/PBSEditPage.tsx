/** React */
import TextSwitch from '@components/create/TextSwitch.tsx'
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
/** Style */
import { Button, Paper } from '@mui/material';
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
		setValue,
		reset} = useForm({
		defaultValues: {
			...data
		}
	});

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

	const handleBackPage = (): void => {
		navigate(`/pbs/read/${id}`)
	};

	return (
	<PageContainer>

		{!isLoading && watch("showData") ?
			<Paper elevation={0}>
				<form onSubmit={handleSubmit(editPBS)}>
					<div>
						<TextSwitch setValue={setValue} watch={watch}/>
						<TextSelect register={register} name={"book"} watch={watch}/>

						<TextNumber register={register} name={"chapter"} verse={"장"}/>

						<div>
							<TextNumber register={register} name={"startVerse"} verse={"절"}/>
							<TextNumber register={register} name={"endVerse"} verse={"절"}/>
						</div>

						<hr/>

						<TextMultiField register={register} name={"content"} />
					</div>

					<FooterContainer content={"right"}>
						<div>
								<Button variant="contained" type={"submit"} sx={{ margin: "0 20px"}}>
									수정
								</Button>

								<Button variant="outlined" onClick={handleBackPage}>
									나가기
								</Button>
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