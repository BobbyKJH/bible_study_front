import React, { useCallback, useEffect, useState } from 'react';
import { SearchAtom } from '@/atom/searchAtom.ts';
/** Type */
import { BibleBooks } from '@/libs/BibleBooks.ts';
/** Style */
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

type Option = { firstLetter?: number, book: string, id: number }


const NoticeSelect: React.FC = () => {
	const [search, setSearch] = useRecoilState(SearchAtom);
	const [_inputValue, setInputValue] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();

	const handleSearchChange = useCallback((value: any) => {
		searchParams.set("book", value);
		searchParams.set("page", "1");
		setSearchParams(searchParams)
	}, [searchParams])

	const book = searchParams.get("book");

	useEffect(() => {
	}, [search])

	return (
		<Autocomplete
			id="grouped-demo"
			value={search}
			onChange={(_event: any, newValue: Option | null) => {
				setSearch(newValue);
				handleSearchChange(newValue?.book === undefined ? "" : newValue?.book);
				setInputValue(newValue?.book === undefined ? "" : newValue?.book);
			}}
			inputValue={book as string}
			onInputChange={(_event: React.SyntheticEvent, newInputValue) => {
				setInputValue(newInputValue);
			}}
			isOptionEqualToValue={(option, value) => option.book === value.book}
			options={BibleBooks}
			groupBy={(option) => option.id < 40 ? "구약" : "신약"}
			getOptionLabel={(option) => option.book}
			sx={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label="성경" />}
		/>
	);
}

export default NoticeSelect;