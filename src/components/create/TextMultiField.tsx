/** React */
import React from 'react';
/** Style */
import { TextField } from '@mui/material'
/** Type */
import Bible from '@type/Bible'

const TextMultiField: React.FC<Bible.Text> = (props) => {
	const { register, name } = props;

	return (
		<TextField
			multiline
			rows={20}
			sx={{ width: "100%" }}
			{...register(name, { required: true })}
		/>
	);
};

export default TextMultiField;