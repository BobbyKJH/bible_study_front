import React from 'react';
/** Atom */
import { SidebarAtom } from '@/atom/SidebarAtom.ts';
import { useSetRecoilState } from 'recoil';
/** libs */
import pagePath from '@/libs/pagePath';
/** Style */
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { SidebarLink, SidebarListText } from '@components/sidebar/SidebarPath.styled.ts';

interface Props {
	text: string;
	path: string;
	page: string;
	Icon?: any;
}

const SidebarPath: React.FC<Props> = ({ text, path, page, Icon }) => {
	const setSidebar = useSetRecoilState(SidebarAtom);

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