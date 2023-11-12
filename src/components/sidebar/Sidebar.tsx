import React, { useState } from 'react';
/** Component */
import SidebarPath from '@components/sidebar/SidebarPath.tsx';
/** Atom */
import { useRecoilState } from 'recoil';
import { SidebarAtom } from '@/atom/SidebarAtom.ts';
/** Style */
import { Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
/** Icon */
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

const Sidebar: React.FC = () => {
	const [sidebar, setSidebar] = useRecoilState(SidebarAtom);
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleCloseSidebar = () => {
		setSidebar(false);
	}

	return (
		<>
			<Drawer
				variant="permanent"
				open
				sx={{
					width: 230,
					flexShrink: 0,
					display: { xs: "none", md: "block" },
					[`& .MuiDrawer-paper`]: { width: 230, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />

				<SidebarPath text={"PBS"} path={"pbs?page=1&book="} page={"pbs"}/>
				<SidebarPath text={"QT"} path={"qt?page=1&book="} page={"qt"}/>

				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}

				<div>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="성경" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="구약" />
							</ListItemButton>

							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="신약" />
							</ListItemButton>
						</List>
					</Collapse>
				</div>
			</Drawer>

			{/* Mobile Sidebar */}
			<Drawer
				variant="temporary"
				onClose={handleCloseSidebar}
				open={sidebar}
				sx={{
					width: 230,
					flexShrink: 0,
					display: { xs: "block", md: "none" },
					[`& .MuiDrawer-paper`]: { width: 230, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<div>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="성경" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="구약" />
							</ListItemButton>

							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="신약" />
							</ListItemButton>
						</List>
					</Collapse>
				</div>

				<SidebarPath text={"PBS"} path={"pbs?page=1&book="} page={"pbs"}/>
				<SidebarPath text={"QT"} path={"qt?page=1&book="} page={"qt"}/>
			</Drawer>
		</>
	);
};

export default Sidebar;