import React from 'react';
/** Type */
import { UseFormRegister } from 'react-hook-form';
/** Style */
import { EditContentMultiTextField } from '@components/edit/EditContent.styled.ts';

interface Props {
	register: UseFormRegister<any>;
	value: string;
}

const EditContent: React.FC<Props> = ({ register, value }) => {
	return (
		<EditContentMultiTextField
			multiline
			fullWidth
			minRows={10}
			{...register("content", { required: true, value: value })}
			placeholder={"본문을 작성해보세요."}
		/>
	);
};

export default EditContent;