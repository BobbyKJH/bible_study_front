import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
/** Style */
import { SidebarBibleBox } from '@components/sidebar/SidebarBible.styled.ts';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
/** Icon */
import { FaBible } from 'react-icons/fa';
import { BiBible, BiSolidBible } from 'react-icons/bi';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const SidebarBible: React.FC = () => {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(prev => !prev);
	}

	const pagePath = (location: string): boolean => {
			return pathname.includes(location)
	}

	return (
		<div>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<FaBible />
				</ListItemIcon>
				<ListItemText primary="성경" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>

			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>

					<SidebarBibleBox $path={pagePath("oldTestament")}>
						<Link to={"/home/oldTestament"}>
							<ListItemButton sx={{ pl: 4 }} >
								<ListItemIcon>
									<BiSolidBible />
								</ListItemIcon>
								<ListItemText primary="구약" />
							</ListItemButton>
						</Link>
					</SidebarBibleBox>

					<SidebarBibleBox $path={pagePath("newTestament")}>
						<Link to={"/home/newTestament"}>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<BiBible />
								</ListItemIcon>
								<ListItemText primary="신약" />
							</ListItemButton>
						</Link>
					</SidebarBibleBox>
				</List>
			</Collapse>
		</div>
	);
};

export default SidebarBible;