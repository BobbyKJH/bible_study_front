/** React */
import React from 'react';
/** Style */
import { TextField } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'

interface TextFieldProps {
	register: UseFormRegister<any>;
	name: string;
}
const TextMultiField: React.FC<TextFieldProps> = (props) => {
	const { register, name } = props;

	return (
		<TextField
			multiline
			rows={4}
			sx={{ width: "100%" }}
			{...register(name, { required: true })}
		/>
	);
};

export default TextMultiField;