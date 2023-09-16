/** React */
import React from 'react';
/** Type */
import Bible from '@type/Bible'
/** Style */
import { InputAdornment, OutlinedInput } from '@mui/material'

const TextNumber: React.FC<Bible.Text> = (props) => {
	const { register, name, verse } = props;

	return (
		<OutlinedInput
			type={"number"}
			endAdornment={<InputAdornment position="end">{verse}</InputAdornment>}
			{...register(name, { required: true, valueAsNumber: true, min: 0 })}
		/>
	);
};

export default TextNumber;