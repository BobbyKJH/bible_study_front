import React from 'react';
/** Type */
import { FieldError, UseFormRegister } from 'react-hook-form';
/** Style */
import { FormControl, InputAdornment } from '@mui/material';
import { EditVerseError, EditVerseField } from '@components/edit/EditVerse.styled.ts';

interface Props {
	register: UseFormRegister<any>;
	value: number;
	name: string;
	content: string;
	errors: FieldError | undefined | any;
}

const EditVerse: React.FC<Props> = ({ register, value, name, content, errors }) => {
	const handleNumberKey = (e: React.KeyboardEvent) => {
		if (!/^[0-9]+$/.test(e.key) && e.key.length === 1) {
			e.preventDefault()
		}
	}

	return (
		<FormControl>
			<EditVerseField
				endAdornment={<InputAdornment position="end">{content}</InputAdornment>}
				{...register(name, {
					value: value,
					required: "입력해주세요.",
					valueAsNumber: true,
					min: 0,
					max: {
						value: 150,
						message: "수정해주세요."
					},
				})}
				type={"number"}
				onKeyDown={handleNumberKey}
			/>
			<EditVerseError>{errors}</EditVerseError>
		</FormControl>
	);
};

export default EditVerse;