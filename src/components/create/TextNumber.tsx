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
			sx={{ width: "100px" }}
			endAdornment={<InputAdornment position="end">{verse}</InputAdornment>}
			{...register(name, { required: true, valueAsNumber: true, min: { value: 1, message: "1보다 큰 값을 입력해주세요."} })}
		/>
	);
};

export default TextNumber;