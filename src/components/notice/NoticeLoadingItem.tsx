import React from 'react';
/** Component */
import NoticeBible from '@components/notice/NoticeBible.tsx';
/** Style */
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { NoticeLoadingItemSubTitle, NoticeLoadingItemTitle } from '@components/notice/NoticeLoadingItem.styled.ts';
/** Icon */
import { BiBible } from 'react-icons/bi';

const NoticeLoadingItem: React.FC = () => {
	const tempArr = Array.from({ length: 10 }, (_, idx) => idx);

	return (
		<>
			<NoticeBible/>

			{...tempArr.map((temp) => (
				<ListItemButton key={temp}>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BiBible/>
							</Avatar>
						</ListItemAvatar>

						<ListItemText
							primary={<NoticeLoadingItemTitle animation="wave" />}
							secondary={<NoticeLoadingItemSubTitle animation="wave" />}
						/>
					</ListItem>
				</ListItemButton>
			))}
		</>
	);
};

export default NoticeLoadingItem;