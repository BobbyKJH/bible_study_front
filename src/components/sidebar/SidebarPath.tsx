import React from 'react';
import { useLocation } from 'react-router-dom';
/** Atom */
import { SidebarAtom } from '@/atom/SidebarAtom.ts';
import { useSetRecoilState } from 'recoil';
/** Style */
import { SidebarLink, SidebarListText } from '@components/sidebar/SidebarPath.styled.ts';
/** Style */
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface Props {
	text: string;
	path: string;
	page: string;
	Icon?: any;
}

const SidebarPath: React.FC<Props> = ({ text, path, page, Icon }) => {
	const { pathname } = useLocation();
	const setSidebar = useSetRecoilState(SidebarAtom);

	const pagePath = (location: string): boolean => {
		if(location === "home") {
			return pathname === "/home";
		} else {
			return pathname.includes(location)
		}
	}

	const handleCloseSidebar = () => {
		setSidebar(false);
	}

	return (
		<SidebarLink to={`/home${path}`} $path={pagePath(page)} onClick={handleCloseSidebar}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<Icon />
					</ListItemIcon>
					<ListItemText primary={<SidebarListText>{text}</SidebarListText>}/>
				</ListItemButton>
			</ListItem>
		</SidebarLink>
	);
};

export default SidebarPath;