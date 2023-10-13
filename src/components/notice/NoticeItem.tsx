import React from 'react';
import {
	NoticeBook,
	NoticeChapter,
	NoticeDate,
	NoticeItemContainer,
	NoticeNum,
	NoticeVerse
} from '@style/notice/NoticeStyle.ts'

interface NoticeItemProps {
	id: number,
	content?: string,
	book: string,
	chapter: number,
	startVerse: number,
	endVerse: number,
	date: string
}

const NoticeItem: React.FC<NoticeItemProps> = (props) => {
	const { id, content, book, chapter, startVerse, endVerse, date } = props;

	return (
		<NoticeItemContainer>
			<NoticeNum>{id}</NoticeNum>
			<NoticeBook>{book}</NoticeBook>
			<NoticeChapter>{chapter}장</NoticeChapter>
			<NoticeVerse>
				<span>{startVerse}</span>
				~
				<span>{endVerse}절</span>
			</NoticeVerse>
			<NoticeDate>{date}</NoticeDate>
		</NoticeItemContainer>
	);
};

export default NoticeItem;