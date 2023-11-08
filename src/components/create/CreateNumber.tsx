import React from 'react';
/** Type */
import { UseFormRegister } from 'react-hook-form';
/** Style */
import { InputAdornment, OutlinedInput } from '@mui/material';

interface Props {
	text: string;
	value: string;
	register: UseFormRegister<any>;
}

const CreateNumber: React.FC<Props> = ({ text, register, value }) => {
	return (
		<OutlinedInput
			id="outlined-adornment-weight"
			endAdornment={<InputAdornment position="end">{text}</InputAdornment>}
			{...register(value, { required: true })}
			type={"number"}
		/>
	);
};

export default CreateNumber;