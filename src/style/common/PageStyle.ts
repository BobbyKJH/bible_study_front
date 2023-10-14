import styled from "styled-components"

export const PageContainer = styled.div`
  margin-left: 200px;
	height: calc(100vh - 64px);
	box-sizing: border-box;
  @media (max-width: 900px) {
    margin-left: 0
  }
	`

export const NoticeCreateContainer = styled.div`
	width: 90%;
	box-sizing: border-box;
  margin-left: 200px;
  @media (max-width: 900px) {
    margin-left: 0
  }
`

export const MyPageNoticeContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 500px;
	width: 250px;
	border:1px solid black;
	justify-content: space-between;
`