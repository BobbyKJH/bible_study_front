/** React */
import React from 'react';
import { Link } from 'react-router-dom'
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
	Icon: React.ElementType;
	handleClose: () => void;
}

const SideBarText: React.FC<SideBarTextProps> = (props) => {
	const { path, text, Icon, handleClose } = props;

	return (
		<Link to={`/${path}`} onClick={handleClose}>
			<ListItemButton sx={
				pathLocaiton(`${props.path}`)
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