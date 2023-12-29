import React, { useEffect } from 'react';
/** Array */
import { BibleBook } from '@/libs/BibleBooks.ts';
/** Type */
import { UseFormSetValue } from 'react-hook-form';
/** Style */
import { TextField } from '@mui/material';
import { CreateBookAutoComplete } from '@components/create/CreateBook.styled.ts';

interface Props {
	setValue: UseFormSetValue<any>;
	storage: string | null;
}

const CreateBook: React.FC<Props> = ({ setValue, storage }) => {
	const [inputValue, setInputValue] = React.useState(storage === null ? "" : storage);
	const [book, setBook] = React.useState<string | null>(storage);

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
		<CreateBookAutoComplete
			value={book}
			onChange={handleChangeBook}
			inputValue={inputValue}
			onInputChange={handleSearchInput}
			options={BibleBook}
			renderInput={(params) => <TextField {...params} label="성경" variant="standard" />}
		/>
	);
}

export default CreateBook;