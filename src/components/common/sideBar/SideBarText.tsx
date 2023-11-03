/** React */
import React from 'react';
import { Link } from 'react-router-dom'
/** Utils */
import { pathLocaiton } from '@utils/pathLocaiton.ts'
/** Style */
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
/** Icon */
import ListItemIcon from '@mui/material/ListItemIcon'


interface SideBarTextProps {
	path: string;
	location: string;
	text: string;
	Icon: React.ElementType;
	handleClose: () => void;
}

const SideBarText: React.FC<SideBarTextProps> = (props) => {
	const { path, location, text, Icon, handleClose } = props;

	return (
		<Link to={`/${path}`} onClick={handleClose}>
			<ListItemButton sx={
				pathLocaiton(`${location}`)
			}>
				<ListItemIcon>

					{<Icon size={"20"}/>}

				</ListItemIcon>
				<ListItemText primary={`${text}`} />
			</ListItemButton>
		</Link>
	);
};

export default SideBarText;