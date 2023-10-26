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
			fullWidth
			variant="standard"
			inputProps={{
				style: {
					padding: "15px 20px"
				}
			}}
			{...register(name, { required: true })}
		/>
	);
};

export default TextMultiField;