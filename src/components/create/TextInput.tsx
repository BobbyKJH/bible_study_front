/** React */
import React from 'react';
/** Style */
import { TextField } from '@mui/material'
/** Type */
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