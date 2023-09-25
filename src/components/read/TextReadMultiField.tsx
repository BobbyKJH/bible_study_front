/** React */
import React from 'react';
/** Style */
import { TextField } from '@mui/material'
/** Type */
import Bible from '@type/Bible'

const TextReadMultiField: React.FC<Bible.Read> = (props) => {
	const { value } = props;

	return (
		<TextField
			multiline
			rows={20}
			value={value}
			disabled={true}
			sx={
				{
					width: "100%",
					"& .MuiInputBase-input.Mui-disabled": {
						WebkitTextFillColor: "#000000",
					},
				}
			}
		/>
	);
};

export default TextReadMultiField;