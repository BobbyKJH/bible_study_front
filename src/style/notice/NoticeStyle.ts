import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';



export const NoticePaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: space-between;
	height: 800px;
	width: 100%;
	padding: 0;
`;

/** 게시판 */
export const NoticeItem = styled(Link)`
	display: flex;
  padding: 10px;
	box-sizing: border-box;
	border: 1px solid black;
	&:hover {
		text-decoration: underline;
	}
`;
/** 게시판 순서 */
export const NoticeNum = styled.span`
	width: 20%;
	text-align: center;
`;
/** 게시판 내용 */
export const NoticeTitle = styled.span``;
/** 게시판 성경 */
export const NoticeBook = styled.span``;
/** 게시판 절 */
export const NoticeVerse = styled.span``;
/** 게시판 날짜 */
export const NoticeDate = styled.span``;