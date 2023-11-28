import { Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
/** Style */
import { NoticeCreateIcon, NoticeCreateSpeedDial } from '@components/notice/NoticeCreateButton.styled.ts';

interface Props {
	path: string;
}

const NoticeCreateButton: React.FC<Props> = ({ path }) => {
	return (
		<Link to={`/home/${path}/create`}>
			<Tooltip title="글쓰기" placement="top">
				<NoticeCreateSpeedDial
					ariaLabel="SpeedDial basic"
					icon={<NoticeCreateIcon />}
				/>
			</Tooltip>
		</Link>
	);
}

export default NoticeCreateButton;