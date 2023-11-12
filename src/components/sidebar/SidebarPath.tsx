import React from 'react';
import { useLocation } from 'react-router-dom';
/** Style */
import { SidebarLink } from '@components/sidebar/SidebarPath.styled.ts';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface Props {
	text: string;
	path: string;
	page: string;
}

const SidebarPath: React.FC<Props> = ({ text, path, page }) => {
	const { pathname } = useLocation();

	const pagePath = (location: string) => {
		return pathname.includes(location)
	}

	return (
		<SidebarLink to={`/home/${path}`} $path={pagePath(page)}>
			<ListItem disablePadding sx={{fontWeight: 900}}>
				<ListItemButton>
					<ListItemIcon>
						{/*{ % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
					</ListItemIcon>
					<ListItemText primary={text}/>
				</ListItemButton>
			</ListItem>
		</SidebarLink>
	);
};

export default SidebarPath;