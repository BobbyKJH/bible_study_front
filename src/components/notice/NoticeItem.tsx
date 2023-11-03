/** React */
import React from 'react';
/** Style */
import {
	NoticeNum,
	NoticeBook,
	NoticeVerse,
	NoticeChapter,
	NoticeItemContainer
} from '@style/notice/NoticeStyle.ts'

interface NoticeItemProps {
	id: number,
	content?: string,
	book: string,
	chapter: number,
	startVerse: number,
	endVerse: number,
}

const NoticeItem: React.FC<NoticeItemProps> = (props) => {
	const { id, content, book, chapter, startVerse, endVerse } = props;

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
		</NoticeItemContainer>
	);
};

export default NoticeItem;