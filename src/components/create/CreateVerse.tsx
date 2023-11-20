import React from 'react';
/** Type */
import { FieldError, UseFormRegister } from 'react-hook-form';
/** Style */
import { FormControl, InputAdornment } from '@mui/material';
import { TextFieldVerse, TextFieldVerseError } from '@components/create/CreateVerse.styled.ts';

interface Props {
	register: UseFormRegister<any>;
	name: string;
	errors: FieldError | undefined | any;
}

const CreateVerse: React.FC<Props> = ({ register, name, errors }) => {
	const handleNumberKey = (e: React.KeyboardEvent) => {
		if (!/^[0-9]+$/.test(e.key) && e.key.length === 1) {
			e.preventDefault()
		}
	}

	return (
		<FormControl>
			<TextFieldVerse
				endAdornment={<InputAdornment position="end">절</InputAdornment>}
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
				onPaste={e => e.preventDefault()}
			/>
			<TextFieldVerseError>{errors}</TextFieldVerseError>
		</FormControl>
	);
};

export default CreateVerse;