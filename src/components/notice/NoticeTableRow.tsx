import React from 'react';
import { useNavigate } from 'react-router';
/** Style */
import { TableCell } from '@mui/material';
import { NoticeRow } from '@components/notice/NoticeTableRow.styled.ts';

interface Props {
	id: number;
	book: string;
	chapter: number;
	startVerse: number;
	endVerse: number;
	createAt: string;
	link: string;
}

const NoticeTableRow: React.FC<Props> = ({ id, book, chapter, startVerse, endVerse, createAt, link }) => {
	const navigate = useNavigate();

	const handlePathChange = () => {
		navigate(`/home/${link}/${id}`)
	}

	return (
		<NoticeRow onClick={handlePathChange}>
			<TableCell component="th" align="center">
				{book}
			</TableCell>
			<TableCell align="center">{chapter}장</TableCell>
			<TableCell align="center">{startVerse}절 - {endVerse}절</TableCell>
			<TableCell align="center">{createAt}</TableCell>
		</NoticeRow>
	);
};

export default NoticeTableRow;