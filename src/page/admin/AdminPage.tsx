/** React */
import React, { useEffect, useState } from 'react';
/** Query */
import { useAdminQuery, useAdminUpdateMutation } from '@/api/AdminQuery.ts'
/** Hook */
import { SubmitHandler, useForm } from 'react-hook-form'
/** Component */
import TextInput from '@components/create/TextInput.tsx'
import TextNumber from '@components/create/TextNumber.tsx'
import TextMultiField from '@components/create/TextMultiField.tsx'
import TextReadNumber from '@components/read/TextReadNumber.tsx'
import TextReadMultiField from '@components/read/TextReadMultiField.tsx'
/** Style */
import { Button } from '@mui/material'
import { PageContainer } from '@style/common/PageStyle.ts'
import { FooterContainer } from '@style/common/FooterStyle.ts'

const AdminPage: React.FC = () => {
	const [edit, setEdit] = useState<boolean>(true);
	const { register, reset, handleSubmit } = useForm();

	const { data, isLoading } = useAdminQuery();
	const { mutate } = useAdminUpdateMutation();

	useEffect(() => {
		reset({...data})
	}, [isLoading, edit]);

	const editAdmin: SubmitHandler<any> = (data): void => {
		if(window.confirm("주간 PBS를 수정하시겠습니까?")){
			mutate(data)
			setEdit(true);
		}
	}

	/** 수정 여부 */
	const editStart = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		const { name } = event.currentTarget;
		if(name === "edit"){
			setEdit(false);
		} else {
			setEdit(true);
		}
	}

	return (
		<PageContainer>
			{
				(edit === true && !isLoading) &&
        <form>
          <input type={"date"} disabled={true} value={data.startDate}/>
          <input type={"date"} disabled={true} value={data.endDate}/>

          <TextInput register={register} name={"book"}/>

          <TextReadNumber value={data.chapter} verse={"장"}/>
          <TextReadNumber value={data.startVerse} verse={"절"}/>
          <TextReadNumber value={data.endVerse} verse={"절"}/>

					<hr/>

          <TextReadMultiField value={data.evangelize}/>

          <FooterContainer content={"right"}>
						<div>
							<Button name={"edit"} onClick={editStart} variant="contained">수정 하기</Button>
            </div>
					</FooterContainer>
        </form>
			}

			{
				(edit === false && !isLoading) &&
					<form onSubmit={handleSubmit(editAdmin)}>
            <input type={"date"} {...register("startDate", { required: true })}/>
            <input type={"date"} {...register("endDate", { required: true })}/>
						<TextInput register={register} name={"book"}/>

						<TextNumber register={register} name={"chapter"} verse={"장"}/>
						<TextNumber register={register} name={"startVerse"} verse={"절"}/>
						<TextNumber register={register} name={"endVerse"} verse={"절"}/>

						<hr/>

						<TextMultiField register={register} name={"evangelize"}/>

						<FooterContainer content={"right"}>
							<div>
								<Button type={"submit"} variant="contained" sx={{ margin : "0 20px"}}>수정 완료</Button>

								<Button name={""}  onClick={editStart} variant="outlined">수정 취소</Button>
              </div>
            </FooterContainer>
					</form>
			}
		</PageContainer>
	);
};

export default AdminPage;