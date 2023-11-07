import React from 'react';
import Link from 'next/link';
/** Hook */
import useSidebar from '@/hook/useSidebar';
/** Style */
import styles from '@/components/common/sidebar/Sidebar.module.css';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface Props {
	href: string;
	text: string;
	Icon: React.ElementType;
}

const SidebarText: React.FC<Props> = (props) => {
	const { handleCloseSidebar } = useSidebar();
	const { href, text, Icon } = props;

	return (
		<Link href={`/home/${href}`} className={styles.sidebar_link} onClick={handleCloseSidebar}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<Icon size={"20"}/>
					</ListItemIcon>

					<ListItemText primary={text} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
};

export default SidebarText;