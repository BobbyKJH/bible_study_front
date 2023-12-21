import styled from 'styled-components';

export const SidebarBibleBox = styled.div<{ $path: boolean }>`
	background-color: ${({ $path }) => $path ? "rgba(0, 0, 0, 0.09)" : "#fff"};
	box-sizing: border-box;
	border-right: ${({ $path }) => $path ? "5px solid #000" : "5px solid #fff"};
	&:hover{
		border-right: ${({ $path }) => $path ? "5px solid #000" : "none"};
	}
`

export const SidebarBibleListText = styled.span`
	font-weight: 700;
	font-size: 0.9rem;
`

export const BibleListText = styled.span`
	font-weight: 700;
	font-size: 0.8rem;
`