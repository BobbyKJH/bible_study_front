/** React */
import React from 'react';
/** Type */
import Bible from '@type/Bible'
/** Style */
import { InputAdornment, OutlinedInput } from '@mui/material'

const TextReadNumber: React.FC<Bible.Read> = (props) => {
	const { value, verse } = props;

	return (
		<OutlinedInput
			type={"number"}
			endAdornment={<InputAdornment position="end">{verse}</InputAdornment>}
			disabled={true}
			value={value}
		/>
	);
};

export default TextReadNumber;