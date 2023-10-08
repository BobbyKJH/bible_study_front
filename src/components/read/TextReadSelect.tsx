/** React */
import React from 'react';
/** Style */
import { MenuItem, Select } from '@mui/material';

interface TextSelectProps {
	value: string;
	// books: {
	// 	id:   number,
	// 	book: string
	// }[];
}

const TextReadSelect: React.FC<TextSelectProps> = (props) => {
	const { value } = props;

	return (
		<div>
			<Select
				defaultValue={value}
				displayEmpty
				fullWidth={true}
				disabled={true}
				sx={{
					"& .MuiInputBase-input.Mui-disabled": {
						WebkitTextFillColor: "#000000",
					}
				}}
			>
				<MenuItem value={value}>
					<em>{value}</em>
				</MenuItem>
			</Select>

		</div>
	);
};

export default TextReadSelect;