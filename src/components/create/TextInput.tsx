import React from 'react';
import { TextField } from '@mui/material'
import Bible from '@type/Bible'

const TextInput: React.FC<Bible.Text> = (props) => {
	const { register, name, label } = props;
	return (
		<TextField
			sx={{ width : "100%" }}
			label={label}
			{...register(name, { required: true })}
			InputLabelProps={{
				shrink: true,
			}}
		/>
	);
};

export default TextInput;