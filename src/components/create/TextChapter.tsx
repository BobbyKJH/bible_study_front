/** React */
import React from 'react';
/** Type */
import { UseFormRegister } from 'react-hook-form'
/** Style */
import { InputAdornment, OutlinedInput } from '@mui/material'

interface TextChapterProps {
	register: UseFormRegister<any>;
	name: string;
	verse: string;
	max: number;
}

const TextChapter: React.FC<TextChapterProps> = (props) => {
	const { register, name, verse, max } = props;

	return (
		<OutlinedInput
			type={"number"}
			sx={{ width: "100px" }}
			endAdornment={<InputAdornment position="end">{verse}</InputAdornment>}
			{...register(name,
				{
					required: "값을 입력해주세요.",
					min: { value: 1, message: "1보다 큰 값을 입력해주세요."},
					// max: { value: max , message: `${max}보다 작은 값을 입력해주세요.`}
				})}
		/>
	);
};

export default TextChapter;