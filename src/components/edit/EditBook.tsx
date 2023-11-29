import React, { useEffect, useState } from 'react';
/** Array */
import { BibleBook } from '@/libs/BibleBooks.ts';
/** Type */
import { UseFormSetValue } from 'react-hook-form';
/** Style */
import { TextField } from '@mui/material';
import { EditBookAutoComplete } from '@components/edit/EditBook.styled.ts';

interface Props {
	setValue: UseFormSetValue<any>;
	value: string | null;
}

const EditBook: React.FC<Props> = ({ setValue, value }) => {
	const [inputValue, setInputValue] = useState(value === null ? "" : value);
	const [book, setBook] = useState<string | null>(value);

	useEffect(() => {
		setValue("book", book)
	}, [book])

	const handleChangeBook = (_event: any, newValue: string | null) => {
		setBook(newValue);
	};

	/** 성경 검색 FC */
	const handleSearchInput = (_event: React.SyntheticEvent, newInputValue: string) => {
		setInputValue(newInputValue);
	}


	return (
		<EditBookAutoComplete
			value={book}
			fullWidth
			onChange={handleChangeBook}
			inputValue={inputValue}
			onInputChange={handleSearchInput}
			options={BibleBook}
			renderInput={(params) => <TextField {...params} label="성경" />}
		/>
	);
}

export default EditBook;