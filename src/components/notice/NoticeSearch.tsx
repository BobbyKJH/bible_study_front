/** React */
import React from 'react';
/** Utils */
import { newTestament, oldTestament } from '@utils/arr/BibleBooks.ts'
/** Style */
import { ListSubheader, MenuItem, Select, SelectChangeEvent } from '@mui/material'

interface NoticeSearchProps {
	search: string;
	handleChangeSearch: (event: SelectChangeEvent) => void
}

const NoticeSearch: React.FC<NoticeSearchProps> = (props) => {
	const { search, handleChangeSearch } = props;

	return (
		<Select
			value={search}
			onChange={handleChangeSearch}
			displayEmpty
			sx={{ width: "150px" }}
		>
			<MenuItem value="">
				<em>전체</em>
			</MenuItem>

			<ListSubheader>구약</ListSubheader>
			{
				oldTestament.map((bible) => (
					<MenuItem value={bible.book} key={bible.id}>{bible.book}</MenuItem>
				))
			}

			<ListSubheader>신약</ListSubheader>
			{
				newTestament.map((bible) => (
					<MenuItem value={bible.book} key={bible.id}>{bible.book}</MenuItem>
				))
			}
		</Select>
	);
};

export default NoticeSearch;