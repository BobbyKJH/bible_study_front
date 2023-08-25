import { useLocation } from 'react-router'

export const pathLocaiton = (path: string): { backgroundColor: string } => {
	const { pathname } = useLocation();

	if(path === "") {
		return pathname === "/" ? { backgroundColor: "rgba(0, 0, 0, 0.04)"} :  { backgroundColor: "#fff"}
	}

	return pathname.includes(path) ? { backgroundColor: "rgba(0, 0, 0, 0.04)"} :  { backgroundColor: "#fff"};
}