import styled from "styled-components";
import { Tabs } from '@mui/material'

/** 관리자 권한 Footer */
export const FooterContainer = styled.div<{ content: string }>`
	height: 70px;
	div{
    display: flex;
    justify-content: ${props => props.content};
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    padding: 0 30px;
    margin-left: 200px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    @media (max-width: 900px) {
      margin-left: 0
    }
	}
`

export const MyPageFooterContainer = styled(Tabs)`
	display: flex;
	align-items: center;
	background-color: #fff;
	z-index: 10;
	box-sizing: border-box;
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;
