import styled from "styled-components"

export const PageContainer = styled.div`
	margin-left: 200px;
	@media (max-width: 900px) {
	  margin-left: 0
	}
	`

export const NoticeContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 500px;
	justify-content: space-between;
`

export const MyPageNoticeContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 500px;
	width: 250px;
	border:1px solid black;
	justify-content: space-between;
`