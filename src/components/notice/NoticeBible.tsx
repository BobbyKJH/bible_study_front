import React from 'react';
import { useSearchParams } from 'react-router-dom';
/** Libs */
import { BibleBook } from '@/libs/BibleBooks.ts';
/** Type */
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
/** Style */
import { InputLabel, ListSubheader, MenuItem, Select } from '@mui/material';
import { BibleEm, NoticeBibleSelect } from '@components/notice/NoticeBible.styled.ts';

const NoticeBible: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const book = searchParams.get("book");

	/** Search FC */
	const handleChangeBible = (event: SelectChangeEvent) => {
		const { value } = event.target;
		searchParams.set("book", value);
		searchParams.set("page", "1");
		setSearchParams(searchParams);
		window.scroll(0, 0)
	}

	const bibleSlice = (arr: string[], num1: number, num2: number) => {
		return arr.slice(num1, num2)
	}

	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: 48 * 4.5,
			},
		},
	};

	return (
		<NoticeBibleSelect>
			<InputLabel htmlFor="grouped-select">성경</InputLabel>
			<Select MenuProps={MenuProps} value={book as string} onChange={handleChangeBible} label="성경">
				<MenuItem value="">
					<BibleEm>
						전체
					</BibleEm>
				</MenuItem>

				<ListSubheader>
						구약
				</ListSubheader>
				{bibleSlice(BibleBook, 0, 39).map((book: string) => (
					<MenuItem value={book} key={book}>
						<BibleEm>
							{book}
						</BibleEm>
					</MenuItem>
				))}

				<ListSubheader>신약</ListSubheader>
				{bibleSlice(BibleBook, 40, 66).map((book: string) => (
					<MenuItem value={book} key={book}>
						<BibleEm>
							{book}
						</BibleEm>
					</MenuItem>
				))}
			</Select>
		</NoticeBibleSelect>
	);
};

export default NoticeBible;