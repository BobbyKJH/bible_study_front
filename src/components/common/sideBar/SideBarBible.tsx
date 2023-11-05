/** React */
import { useState } from 'react'
import { Link } from 'react-router-dom';
/** Recoil */
import { useSetRecoilState } from 'recoil'
import { sideBarAtom } from '@/store/SideBarAtom.ts'
/** Utils */
import { pathLocaiton } from '@utils/pathLocaiton.ts'
/** Style */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
/** Icon */
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon'
import { BiSolidBible, BiBible } from "react-icons/bi";



const SideBarBible = () => {
	const [open, setOpen] = useState(true);
	const setSideBar = useSetRecoilState(sideBarAtom);

	const handleCloseSideBar = () => {
		setSideBar(false);
	};

	const handleClick = () => {
		setOpen((prevOpen) => !prevOpen);
	};


	return (
					<List sx={{p: 0}}>
						<li style={pathLocaiton("Testament")}>
	            {/*@ts-ignore*/}
							<ListItem button open={open} onClick={handleClick}>
								<ListItemIcon>
									<BiSolidBible size={"20"}/>
								</ListItemIcon>
								<ListItemText primary={"성경"} />
								{/*{open ? <ExpandLess /> : <ExpandMore />}*/}
							</ListItem>
						</li>

						<Collapse component="li" in={open} timeout="auto" unmountOnExit>
							<List disablePadding>
								<li style={pathLocaiton("oldTestament")} onClick={handleCloseSideBar}>
									<ListItem button component={Link as any} to={"/oldTestament"} sx={{ pl: 4 }}>
										<ListItemIcon>
											<BiSolidBible/>
										</ListItemIcon>
										<ListItemText primary={"구약"} />
									</ListItem>
								</li>

								<li style={pathLocaiton("newTestament")} onClick={handleCloseSideBar}>
									<ListItem button component={Link as any} to={"/newTestament"} sx={{ pl: 4 }}>
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
}

export default SideBarBible;