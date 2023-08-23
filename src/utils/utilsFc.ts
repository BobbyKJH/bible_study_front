import { useLocation } from 'react-router'

export const pathLocaiton = (path: string): boolean => {
	const { pathname } = useLocation();

	return path === "" ? pathname === "/" : pathname.includes(path);
}