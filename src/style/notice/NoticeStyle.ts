import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';

export const NoticePaper = styled(Paper)`
	position: relative;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: space-between;
	width: 100%;
	padding: 0;
`;

/** 게시판 이름 */
export const NoticeTitle = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 10px;
	cursor: pointer;
	p {
    font-size: 2rem;
    font-weight: 900;
	};
	a {
		display: block;
		border: 1px solid black;
		padding: 10px;
	}
`;

/** 게시판 */
export const NoticeItemContainer = styled.div`
	display: flex;
  padding: 10px;
	box-sizing: border-box;
	border-bottom: 2px solid #808080;
	&:hover {
		text-decoration: underline;
		background-color: #80808070;
	}
`;
/** 게시판 순서 */
export const NoticeNum = styled.span`
	width: 10%;
	text-align: center;
`;

/** 게시판 내용 */
export const NoticeContent = styled.span`
  width: 20%;
`;

/** 게시판 성경 */
export const NoticeBook = styled.span`
  width: 20%;
`;
export const NoticeChapter = styled.span`
  width: 20%;
`;

/** 게시판 절 */
export const NoticeVerse = styled.span`
  width: 20%;
`;

/** 게시판 날짜 */
export const NoticeDate = styled.span`
  width: 20%;
`;

export const NoticeForm = styled.form`
	width: 95%;
	margin: 0 auto;
`;

export const NoticeCreateBtn = styled(Link)`
	position: absolute;
	right: 40px;
	padding: 10px;
`;
