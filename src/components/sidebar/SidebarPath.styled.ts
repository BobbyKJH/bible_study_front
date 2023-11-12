import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const SidebarLink = styled(Link)<{ $path: boolean }>`
	background-color: ${({ $path }) => $path ? "rgba(0, 0, 0, 0.09)" : "#fff"};
	font-weight: 900;
`