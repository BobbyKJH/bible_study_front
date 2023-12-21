import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const SidebarLink = styled(Link)<{ $path: boolean }>`
	background-color: ${({ $path }) => $path ? "rgba(0, 0, 0, 0.09)" : "#fff"};
	box-sizing: border-box;
	border-right: ${({ $path }) => $path ? "5px solid #000" : "5px solid #fff"};
	&:hover{
		border-right: ${({ $path }) => $path ? "5px solid #000" : "none"};
	}
`

export const SidebarListText = styled.span`
	font-weight: 700;
	font-size: 0.9rem;
`