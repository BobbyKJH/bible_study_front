import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Toolbar } from '@mui/material';

export const HeaderContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`

export const HeaderTitle = styled(Link)`
	color: #fff;
	padding: 0 100px;
	@media screen and (max-width: 899px) {
		padding: 0;
	}
`

export const HeaderToolbar = styled(Toolbar)`
	height: 64px;
	padding: 10px;
	padding: 0 10px;
	box-sizing: border-box;
	justify-content: space-between;
`

export const HeaderIconBox = styled.div`
	display: flex;
	width: 70px;
	justify-content: space-between;
`

export const HeaderIcon = styled(Link)`
	color: #fff;
`

export const HeaderBar = styled.nav`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 100%;
	@media (max-width: 899px) {
		display: none;
	}
`

export const HeaderLink = styled(Link)<{ $path: boolean }>`
	height: 100%;
	padding: 0 60px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	color: #fff;
	&::before {
		content: '';
		position: absolute;
		top: calc(100% - 4px);
		width: ${({ $path }) => $path ? "100%" : 0};
		height: 4px;
		background-color: #ffffff;
		transition: all .3s ease-in-out;
	}
	&:hover::before {
		width: 100%;
	}
`

export const HeaderBible = styled.div<{ $path: boolean }>`
	height: 100%;
	padding: 0 60px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	color: #fff;
	.bible {
		display: none;
		transition: all 0.3s;
	}
	&::before {
		content: '';
		position: absolute;
		top: calc(100% - 4px);
		width: ${({ $path }) => $path ? "100%" : 0};
		height: 4px;
		background-color: #ffffff;
		transition: all .3s ease-in-out;
	}
	&:hover::before {
		width: 100%;
	}
	&:hover {
		.bible {
			display: flex;
			flex-direction: column;
			background-color: #03c75a;
			top: 64px;
			position: absolute;
			width: 100%;
		}
		.link {
			width: 64px;
		}
	}
`

export const HeaderBibleLink = styled(Link)<{ $path: boolean }>`
	height: 64px;
	padding: 0 60px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	color: #fff;
	.bible {
		display: none;
	}
	&::before {
		content: '';
		position: absolute;
		top: calc(100% - 4px);
		width: ${({ $path }) => $path ? "100%" : 0};
		height: 4px;
		background-color: #ffffff;
		transition: all .3s ease-in-out;
	}
	&:hover::before {
		width: 100%;
	}
`