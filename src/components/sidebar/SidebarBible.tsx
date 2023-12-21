import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
/** Atom */
import { useSetRecoilState } from 'recoil';
import { SidebarAtom } from '@/atom/SidebarAtom.ts';
/** Style */
import { BibleListText, SidebarBibleBox, SidebarBibleListText } from '@components/sidebar/SidebarBible.styled.ts';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
/** Icon */
import { FaBible } from 'react-icons/fa';
import { BiBible, BiSolidBible } from 'react-icons/bi';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const SidebarBible: React.FC = () => {
	const { pathname } = useLocation();
	const setSidebar = useSetRecoilState(SidebarAtom);
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(prev => !prev);
	}

	const pagePath = (location: string): boolean => {
			return pathname.includes(location)
	}

	const handleCloseSidebar = () => {
		setSidebar(false);
	}

	return (
		<div>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<FaBible />
				</ListItemIcon>
				<ListItemText primary={<SidebarBibleListText>성경</SidebarBibleListText>} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>

			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>

					<SidebarBibleBox $path={pagePath("oldTestament")}>
						<Link to={"/home/oldTestament"} onClick={handleCloseSidebar}>
							<ListItemButton sx={{ pl: 4 }} >
								<ListItemIcon>
									<BiSolidBible />
								</ListItemIcon>
								<ListItemText primary={<BibleListText>구약</BibleListText>} />
							</ListItemButton>
						</Link>
					</SidebarBibleBox>

					<SidebarBibleBox $path={pagePath("newTestament")}>
						<Link to={"/home/newTestament"}>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<BiBible />
								</ListItemIcon>
								<ListItemText primary={<BibleListText>신약</BibleListText>} />
							</ListItemButton>
						</Link>
					</SidebarBibleBox>
				</List>
			</Collapse>
		</div>
	);
};

export default SidebarBible;