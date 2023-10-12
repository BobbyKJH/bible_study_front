/** React */
import React from 'react';
import { Link } from 'react-router-dom'
/** Recoil */
import { useSetRecoilState } from 'recoil'
import { sideBarAtom } from '@/store/sideBarAtom.ts'
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
}

const SideBarText: React.FC<SideBarTextProps> = (props) => {
	const { path, text, Icon } = props;
	const setSideBar = useSetRecoilState(sideBarAtom);

	const handleCloseSideBar = () => {
		setSideBar(false);
	};

	return (
		<Link to={`/${path}`} onClick={handleCloseSideBar}>
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