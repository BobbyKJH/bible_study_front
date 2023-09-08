/** React */
import React from 'react';
import { Link } from 'react-router-dom'
/** Zustand */
import { useSideBar } from '@/store/store.ts'
/** Utils */
import { pathLocaiton } from '@utils/utilsFc.ts'
/** Style */
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
/** Icon */
import ListItemIcon from '@mui/material/ListItemIcon'

interface SideBarTextProps {
	path: string;
	text: string;
	icon: React.ElementType;
}

const SideBarText: React.FC<SideBarTextProps> = (props) => {
	const  { handleCloseSideBar } = useSideBar();
	
	return (
		<Link to={`/${props.path}`} onClick={handleCloseSideBar}>
			<ListItemButton sx={
				pathLocaiton(`${props.path}`)
			}>
				<ListItemIcon>

					{<props.icon size={"20"}/>}

				</ListItemIcon>
				<ListItemText primary={`${props.text}`} />
			</ListItemButton>
		</Link>
	);
};

export default SideBarText;