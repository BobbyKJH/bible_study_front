/** React */
import React, { useEffect } from 'react';
/** Query */
import { useQTQuery } from '@/api/QTQuery.ts'
/** Hook */
import usePage from '@/hook/usePage.ts'
import useSearch from '@/hook/useSearch.ts'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import pageCount from '@utils/pageCount.ts'
import pageNumber from '@utils/pageNumber.ts'
/** Component */
import NoticeSearch from '@components/notice/NoticeSearch.tsx'
/** Style */
import { Button, Pagination } from '@mui/material'
import { PageContainer } from '@style/common/PageStyle.ts'
import { FooterContainer } from '@style/common/FooterStyle.ts'
import { NoticeBook, NoticeChapter, NoticeCreateBtn, NoticeDate, NoticeItem, NoticeNum, NoticePaper, NoticeTitle, NoticeVerse } from '@style/notice/NoticeStyle.ts'

const QTPage: React.FC = () => {
	/** 검색 */
	const { search, handleChangeSearch } = useSearch();
	/** Page */
	const { page, handleClickPage } = usePage();
	/** Data */
	const { data, isLoading, refetch } = useQTQuery();

	useEffect(() => {
		refetch();
	}, [page]);

	return (
		<PageContainer>
			<NoticeTitle>
				<p>QT 게시판</p>

				<NoticeSearch search={search} handleChangeSearch={handleChangeSearch} />
			</NoticeTitle>

				{!isLoading ?
					<NoticePaper elevation={0}>
						<div>
							{pageNumber(data, search, page).map((item, index: number) => (
								<NoticeItem to={`/qt/read/${item.id}`} key={item.id}>
									<NoticeNum>{pageIndex(index, page)}</NoticeNum>
									<NoticeBook>{item.book}</NoticeBook>
									<NoticeChapter>{item.chapter}장</NoticeChapter>
									<NoticeVerse>
										<span>{item.startVerse}</span>
										~
										<span>{item.endVerse}절</span>
									</NoticeVerse>
									<NoticeDate>{item.date}</NoticeDate>
								</NoticeItem>
							))}
						</div>

						<FooterContainer content={"center"}>
							<Pagination
								count={pageCount(data, search)}
								page={page}
								onChange={handleClickPage}
								showFirstButton
								showLastButton
								sx={{ display:"flex",justifyContent:"center", p: "10px 0px" }}
							/>

							<NoticeCreateBtn to={"/qt/create"}>
								<Button variant="contained" color="success">
									글쓰기
								</Button>
							</NoticeCreateBtn>
						</FooterContainer>
					</NoticePaper>
					:
					null
				}
		</PageContainer>
	);
};

export default QTPage;