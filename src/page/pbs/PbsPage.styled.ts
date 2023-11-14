import styled from 'styled-components';

export const PbsPagePagination = styled.div`
	position: fixed;
	bottom: 0;
	left: 230px;
	right: 0;
	display: flex;
  padding: 15px;
	justify-content: center;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  @media(max-width: 899px){
    left: 0;
  }
`;