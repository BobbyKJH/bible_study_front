import styled from 'styled-components';

export const SidebarBibleBox = styled.div<{ $path: boolean }>`
	background-color: ${({ $path }) => $path ? "rgba(0, 0, 0, 0.09)" : "#fff"};
	font-weight: 900;
`