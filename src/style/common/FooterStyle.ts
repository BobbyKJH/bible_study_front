import styled from "styled-components";

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
