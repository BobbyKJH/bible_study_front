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
			value={value}
			variant="standard"
			disabled={true}
			fullWidth={true}
			inputProps={{
				style: {
					padding: "15px 20px"
				}
			}}
			sx={
				{
					"& .MuiInputBase-input.Mui-disabled": {
						WebkitTextFillColor: "#000000",
					},
				}
			}
		/>
	);
};

export default TextReadMultiField;