"use client"
import React, { useState } from 'react';
import Link from 'next/link';
/** Hook */
import useSidebar from '@/hook/useSidebar';
/** Style */
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
/** Icon */
import { BiBible, BiSolidBible } from 'react-icons/bi';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const SidebarBible: React.FC = () => {
	const [open, setOpen] = useState(true);
	const { handleCloseSidebar } = useSidebar();

	const handleClick = () => {
		setOpen(prev => !prev);
	};

	return (
		<List sx={{p: 0}}>
			<li>
				{/*@ts-ignore*/}
				<ListItem button open={open} onClick={handleClick}>
					<ListItemIcon>
						<BiSolidBible size={"20"}/>
					</ListItemIcon>
					<ListItemText primary={"성경"} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
			</li>

			<Collapse component="li" in={open} timeout="auto" unmountOnExit>
				<List disablePadding>
					<li onClick={handleCloseSidebar}>
						<ListItem button component={Link as any} href={"/oldTestament"} sx={{ pl: 4 }}>
							<ListItemIcon>
								<BiSolidBible/>
							</ListItemIcon>
							<ListItemText primary={"구약"} />
						</ListItem>
					</li>

					<li onClick={handleCloseSidebar}>
						<ListItem button component={Link as any} href={"/newTestament"} sx={{ pl: 4 }}>
							<ListItemIcon>
								<BiBible />
							</ListItemIcon>
							<ListItemText primary={"신약"} />
						</ListItem>
					</li>
				</List>
			</Collapse>

		</List>
	);
};

export default SidebarBible;