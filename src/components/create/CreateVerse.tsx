import React from 'react';
/** Type */
import { FieldError, UseFormRegister } from 'react-hook-form';
/** Style */
import { FormControl, InputAdornment } from '@mui/material';
import { CreateVerseField, CreateVerseError } from '@components/create/CreateVerse.styled.ts';

interface Props {
	register: UseFormRegister<any>;
	name: string;
	content: string;
	errors: FieldError | undefined | any;
}

const CreateVerse: React.FC<Props> = ({ register, name, content, errors }) => {
	const handleNumberKey = (e: React.KeyboardEvent) => {
		if (!/^[0-9]+$/.test(e.key) && e.key.length === 1) {
			e.preventDefault()
		}
	}

	return (
		<FormControl>
			<CreateVerseField
				endAdornment={<InputAdornment position="end">{content}</InputAdornment>}
				{...register(name, {
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
			<CreateVerseError>{errors}</CreateVerseError>
		</FormControl>
	);
};

export default CreateVerse;