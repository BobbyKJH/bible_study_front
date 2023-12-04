import React from 'react';
/** Api */
import { useAdminQuery, useAdminUpdateMutation } from '@/api/AdminQuery.ts';
/** Hook */
import { useForm } from 'react-hook-form';
/** Component */
import EditBook from '@/components/edit/EditBook';
import EditVerse from '@/components/edit/EditVerse';
import EditContent from '@/components/edit/EditContent';

const AdminPage: React.FC = () => {
	const { data, isLoading } = useAdminQuery();
	const { mutate } = useAdminUpdateMutation();
	const { register, handleSubmit, setValue, watch, formState: {errors} } = useForm();

	if(isLoading) {
		return <div>111</div>
	}

	console.log(!isLoading && data);

	const handleEditAdmin = (data: any) => {
		mutate(data, {
			onSuccess: () => {
				alert("수정 완료")
			},
			onError: () => {
				alert("수정 실패")
			}
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit(handleEditAdmin)}>
			<EditBook setValue={setValue} value={data.book}/>
			<input type='date' {...register("startDate", {
				value: data.startDate
			})}/>
			<input type='date' {...register("endDate", {
				value: data.endDate
			})}/>

			<EditVerse 
				register={register} 
				value={data.chapter} 
				name="chapter" 
				content='장' 
				errors={errors?.chapter?.message}
			/>
			<EditVerse register={register} value={data.startVerse} name="startVerse" content='절' errors={errors?.startVerse?.message} />
			<EditVerse register={register} value={data.endVerse} name="endVerse" content='절' errors={errors?.endVerse?.message} />

			<textarea {...register("evangelize", {
				value: data.evangelize
			})}/>

			<button type='submit'>등록</button>
			</form>
		</div>
	);
};

export default AdminPage;