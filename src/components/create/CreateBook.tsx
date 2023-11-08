"use client"
import React, { useEffect } from 'react';
/** Array */
import BibleBooks from '@/libs/bible/BibleBooks';
/** Type */
import { UseFormSetValue } from 'react-hook-form';
/** Style */
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
	setValue: UseFormSetValue<any>
}

const CreateBook: React.FC<Props> = ({ setValue }) => {
	const [bible, setBible] = React.useState<{id: number, book: string}>({id:0, book:""});

	const defaultProps = {
		options: BibleBooks,
		getOptionLabel: (option: any) => option.book,
	};

	useEffect(() => {
		setValue("book", bible?.book || "");
	}, [bible])

	return (
			<Autocomplete
				{...defaultProps}
				value={bible}
				options={BibleBooks}
				onChange={(event: any, newValue: any | null) => {
					setBible(newValue);
				}}
				renderInput={(params) => (
					<TextField {...params} label="성경"  />
				)}
			/>

	);
}

export default CreateBook;