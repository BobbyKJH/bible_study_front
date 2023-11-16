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
			<NoticeCreateSpeedDial
				ariaLabel="SpeedDial basic"
				icon={<NoticeCreateIcon />}
			/>
		</Link>
	);
}

export default NoticeCreateButton;