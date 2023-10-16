/** React */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
/** Custom Hook */
import usePage from '@/hook/usePage.ts'
import useSearch from '@/hook/useSearch.ts'
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx'
import NoticeSearch from '@components/notice/NoticeSearch.tsx'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import pageCount from '@utils/pageCount.ts'
import pageNumber from '@utils/pageNumber.ts'
/** Api */
import { usePBSQuery } from '@/api/PBSQuery.ts'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'
import { NoticePaper, NoticeTitle, NoticeCreateBtn } from '@style/notice/NoticeStyle.ts'
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
							<Link to={`/pbs/read/${item.id}`} key={item.id}>
									<NoticeItem
										id={pageIndex(index, page)}
										book={item.book}
										chapter={item.chapter}
										startVerse={item.startVerse}
										endVerse={item.endVerse}
										date={item.date}
									/>
							</Link>
						))}
					</div>

					<FooterContainer content={"center"}>
						<div>
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
						</div>
					</FooterContainer>
				</NoticePaper>
				:
				null
			}
		</PageContainer>
	);
};

export default PBSPage;