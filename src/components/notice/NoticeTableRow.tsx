import React from 'react';
import { useNavigate } from 'react-router';
/** Style */
import { NoticeRow, NoticeCell } from '@components/notice/NoticeTableRow.styled.ts';

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
			<NoticeCell component="th" align="center">
				{book}
			</NoticeCell>
			<NoticeCell align="center">{chapter}장</NoticeCell>
			<NoticeCell align="center">{startVerse}절 - {endVerse}절</NoticeCell>
			<NoticeCell align="center">{createAt}</NoticeCell>
		</NoticeRow>
	);
};

export default NoticeTableRow;