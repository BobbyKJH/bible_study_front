import React from 'react';
import { Link } from 'react-router-dom';
/** Style */
import { NoticeCreateSpeedDial } from '@components/notice/NoticeCreateButton.styled.ts';
/** Icon */
import { LuPenSquare } from "react-icons/lu";

interface Props {
	path: string;
}

const NoticeCreateButton: React.FC<Props> = ({ path }) => {
	return (
		<Link to={`/home/${path}/create`}>
			<NoticeCreateSpeedDial
				ariaLabel="SpeedDial basic"
				icon={<LuPenSquare />}
			/>
		</Link>
	);
}

export default NoticeCreateButton;