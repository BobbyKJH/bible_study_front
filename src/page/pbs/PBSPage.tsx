/** React */
import React, { useEffect } from 'react';
/** Custom Hook */
import usePage from '@/hook/usePage.ts'
import useSearch from '@/hook/useSearch.ts'
/** Component */
import NoticeSearch from '@components/notice/NoticeSearch.tsx'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import pageCount from '@utils/pageCount.ts'
import pageNumber from '@utils/pageNumber.ts'
/** Api */
import { usePBSQuery } from '@/api/PBSQuery.ts'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'
import {
	NoticeItem,
	NoticePaper,
	NoticeNum,
	NoticeTitle,
	NoticeBook,
	NoticeChapter, NoticeVerse, NoticeDate, NoticeCreateBtn
} from '@style/notice/NoticeStyle.ts'
import { Button, Pagination } from '@mui/material'
import { FooterContainer } from '@style/common/FooterStyle.ts'


const PBSPage: React.FC = () => {
	/** 검색 */
	const { search, handleChangeSearch } = useSearch();
	/** Page */
	const { page, handleClickPage  } = usePage();
	/** PBS 게시판 */
	const { data, isLoading, refetch } = usePBSQuery();

	useEffect(() => {
		refetch();
	}, [page]);


	return (
		<PageContainer>
			<NoticeTitle>
				<p>PBS 게시판</p>

				<NoticeSearch search={search} handleChangeSearch={handleChangeSearch} />
			</NoticeTitle>

			{!isLoading ?
				<NoticePaper elevation={0}>
					<div>
						{pageNumber(data, search, page).map((item, index: number) => (
							<NoticeItem to={`/pbs/read/${item.id}`} key={item.id}>
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

						<NoticeCreateBtn to={"/pbs/create"}>
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

export default PBSPage;