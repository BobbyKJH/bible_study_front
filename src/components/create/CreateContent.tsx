import React from 'react';
/** Type */
import { UseFormRegister } from 'react-hook-form';
/** Style */
import { CreateContentMultiTextField } from '@components/create/CreateContent.styled.ts';

interface Props {
	register: UseFormRegister<any>;
}

const CreateContent: React.FC<Props> = ({ register }) => {
	return (
		<CreateContentMultiTextField
			multiline
			fullWidth
			minRows={14}
			{...register("content", { required: true })}
			placeholder={"본문을 작성해보세요."}
		/>
	);
};

export default CreateContent;