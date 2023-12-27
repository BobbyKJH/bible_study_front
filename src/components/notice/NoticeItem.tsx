import React from 'react';
/** Libs */
import { BibleBooks } from '@/libs/BibleBooks.ts';
/** Style */
import { NoticeItemSubTitle, NoticeItemTitle } from '@components/notice/NoticeItem.styled.ts';
import { ListItemButton, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
/** Icon */
import { BiBible, BiSolidBible } from 'react-icons/bi';

interface Props {
	book: string;
	startVerse: number;
	endVerse: number;
	chapter: number;
	view: number;
}

const NoticeItem: React.FC<Props> = ({ book, startVerse, endVerse, chapter, view }) => {
	/** 신약 구약 구분 하는 FC */
	const bibleId = BibleBooks.find((books) => {
		const testament = books.book === book;
		
		return testament
	})

	const BibleIcon = bibleId?.id as number

	return (
		<ListItemButton>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						{BibleIcon < 40 ? <BiBible/> : <BiSolidBible/>}
					</Avatar>
				</ListItemAvatar>

				<ListItemText
					primary={<NoticeItemTitle>{book}</NoticeItemTitle>}
					secondary={<NoticeItemSubTitle>{chapter}장 {startVerse}:{endVerse} {view}회</NoticeItemSubTitle>}
				/>
			</ListItem>
		</ListItemButton>
	);
}

export default NoticeItem;